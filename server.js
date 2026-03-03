const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;  // port HTTP de dev
const DIRECTORY = './pages'; // dossier avec tous les fichiers HTML

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


app.use('/icons', express.static(path.join(__dirname, 'public', 'icons')));
app.use('/statics', express.static(path.join(DIRECTORY, 'statics')));
app.get('/maintenance-banner.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, 'maintenance-banner.js'));
});

function injectMaintenanceScript(html) {
    const scriptTag = '<script src="/maintenance-banner.js"></script>';
    if (html.includes(scriptTag)) return html;

    const headClose = /<\/head>/i;
    if (headClose.test(html)) {
        return html.replace(headClose, `${scriptTag}\n</head>`);
    }

    return `${scriptTag}\n${html}`;
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
        res.status(404).send('Not found');
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

