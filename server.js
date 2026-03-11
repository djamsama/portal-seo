const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;  // port HTTP de dev
const DIRECTORY = './pages'; // dossier avec tous les fichiers HTML

const MAINTENANCE_SCRIPT_TAG = '<script src="/statics/maintenance-banner.js"></script>';
const NEW_RELIC_SCRIPT_TAG = '<script src="/statics/newrelic.js"></script>';

function normalizePathname(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
}

function normalizeHost(hostname) {
    return (hostname || '').toLowerCase();
}

function collectHtmlFiles(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) return collectHtmlFiles(fullPath);
        if (entry.isFile() && entry.name.endsWith('.html')) return [fullPath];
        return [];
    });
}

// Fonction qui décode le nom de fichier
function decodeFilename(filename) {
    const match = filename.match(/https___(.+)\.html$/);
    if (!match) return null;

    let full = match[1].replace(/_/g, '/'); // ex: www.medicalexpo.com_
    const url = new URL('http://' + full);  // HTTP ici
    return {
        host: normalizeHost(url.hostname),
        pathname: normalizePathname(url.pathname || '/')
    };
}

// Construire le mapping host + path -> fichier
let urlMap = {};
collectHtmlFiles(DIRECTORY).forEach(filePath => {
    const filename = path.basename(filePath);
    const decoded = decodeFilename(filename);
    if (!decoded) return;

    const key = decoded.host + decoded.pathname;
    urlMap[key] = filePath;
    if (decoded.pathname === '/') {
        urlMap[decoded.host] = filePath;
    }
});

function getHostAlternates(host) {
    if (host.startsWith('www.')) return [host, host.slice(4)];
    return [host, `www.${host}`];
}


app.use('/statics', express.static(path.join(__dirname, 'statics')));
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'robots.txt'));
});


const sitemapFiles = fs
    .readdirSync(path.join(__dirname, 'sitemaps'))
    .filter((fileName) => /^sitemaps_.+\.xml$/.test(fileName));

sitemapFiles.forEach((fileName) => {
    app.get(`/${fileName}`, (req, res) => {
        res.type('application/xml');
        res.sendFile(path.join(__dirname, 'sitemaps', fileName));
    });
});

app.use('/sitemaps-me', express.static(path.join(__dirname, 'sitemaps', 'sitemaps-me')));
app.use('/sitemaps-di', express.static(path.join(__dirname, 'sitemaps', 'sitemaps-di')));


app.get('/statics/maintenance-banner.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, '/statics/maintenance-banner.js'));
});

function injectMaintenanceScript(html) {
    const scriptTags = [NEW_RELIC_SCRIPT_TAG, MAINTENANCE_SCRIPT_TAG];
    const missingTags = scriptTags.filter(tag => !html.includes(tag));

    if (missingTags.length === 0) return html;

    const headClose = /<\/head>/i;
    const injection = `${missingTags.join('\n')}\n`;

    if (headClose.test(html)) {
        return html.replace(headClose, `${injection}</head>`);
    }

    return `${injection}${html}`;
}

// Middleware pour servir les fichiers
app.use((req, res) => {
    const host = normalizeHost(req.headers.host?.split(':')[0]); // retirer port si présent
    const pathname = normalizePathname(req.path);
    const hostAlternates = getHostAlternates(host);

    let file;
    for (const currentHost of hostAlternates) {
        const key = currentHost + pathname;
        file = urlMap[key] || (pathname === '/' ? urlMap[currentHost] : undefined);
        if (file) break;
    }

    if (!file) {
        res.status(503).type('html').send(injectMaintenanceScript(''));
        return;
    }

    fs.readFile(path.resolve(file), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        res.type('html').send(injectMaintenanceScript(data));
    });
});

// Démarrer le serveur HTTP
app.listen(PORT, '0.0.0.0', () => {
    console.log(`HTTP server running on http://0.0.0.0:${PORT}`);
});

