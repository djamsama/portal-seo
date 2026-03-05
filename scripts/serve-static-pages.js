const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const STATIC_PAGES_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATICS_DIR = path.resolve(__dirname, '..', 'statics');
const INDEX_JSON_PATH = path.resolve(STATIC_PAGES_DIR, 'pagelist.json');
const INDEX_HTML_PATH = path.resolve(STATIC_PAGES_DIR, 'pagelist.html');

function normalizePathname(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
}

function normalizeHost(hostname) {
    return (hostname || '').toLowerCase();
}

function getHostAlternates(host) {
    if (host.startsWith('www.')) return [host, host.slice(4)];
    return [host, `www.${host}`];
}

function loadIndexEntries() {
    if (!fs.existsSync(INDEX_JSON_PATH)) return [];
    try {
        return JSON.parse(fs.readFileSync(INDEX_JSON_PATH, 'utf8'));
    } catch (error) {
        return [];
    }
}

function buildIndexHtml(entries) {
    if (!entries.length) return '<p>Aucune page générée.</p>';

    const items = entries
        .map((entry) => {
            const sizeKb = Math.max(entry.sizeBytes / 1024, 0.1);
            return `<li><a href="http://${entry.host}${entry.urlPath}">${entry.host}${entry.urlPath}</a> (${sizeKb.toFixed(1)} KB)</li>`;
        })
        .join('\n');

    return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Page list</title>
</head>
<body>
  <h1>Page list</h1>
  <ul>
    ${items}
  </ul>
</body>
</html>`;
}

const indexEntries = loadIndexEntries();
const indexHtml = fs.existsSync(INDEX_HTML_PATH) ? null : buildIndexHtml(indexEntries);

app.use('/statics', express.static(STATICS_DIR, {
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
}));

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, '..', 'robots.txt'));
});

app.get('/pagelist', (req, res) => {
    if (fs.existsSync(INDEX_HTML_PATH)) {
        res.type('html').sendFile(INDEX_HTML_PATH);
        return;
    }
    res.type('html').send(indexHtml || '<p>Aucune page générée.</p>');
});

app.use((req, res) => {
    const host = normalizeHost(req.headers.host?.split(':')[0]);
    const pathname = normalizePathname(req.path);
    const hostAlternates = getHostAlternates(host);

    let candidatePath;
    for (const currentHost of hostAlternates) {
        const hostDir = path.join(STATIC_PAGES_DIR, currentHost);
        const resolvedPath = pathname === '/' ? hostDir : path.join(hostDir, pathname.replace(/^\//, ''));
        const indexPath = path.join(resolvedPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            candidatePath = indexPath;
            break;
        }
    }

    function injectMaintenanceScript(html) {
        const scriptTag = '<script src="/statics/maintenance-banner.js"></script>';
        if (html.includes(scriptTag)) return html;

        const headClose = /<\/head>/i;
        if (headClose.test(html)) {
            return html.replace(headClose, `${scriptTag}\n</head>`);
        }

        return `${scriptTag}\n${html}`;
    }

    if (!candidatePath) {
        res.status(503).type('html').send(injectMaintenanceScript(''));
        return;
    }

    res.setHeader('Cache-Control', 'public, max-age=300');
    res.sendFile(candidatePath);
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Static pages server running on http://127.0.0.1:${PORT}`);
});
