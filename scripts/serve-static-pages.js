const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const STATIC_PAGES_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATICS_DIR = path.resolve(__dirname, '..', 'statics');

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

function collectIndexFiles(dirPath, base = '') {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        const nextBase = path.join(base, entry.name);
        if (entry.isDirectory()) return collectIndexFiles(fullPath, nextBase);
        if (entry.isFile() && entry.name === 'index.html') return [nextBase];
        return [];
    });
}

function buildIndexHtml() {
    if (!fs.existsSync(STATIC_PAGES_DIR)) return '<p>Aucune page générée.</p>';

    const files = collectIndexFiles(STATIC_PAGES_DIR);
    const links = files
        .map((filePath) => {
            const normalized = filePath.replace(/\\/g, '/');
            const parts = normalized.split('/');
            const host = parts.shift();
            const pathname = parts.slice(0, -1).join('/');
            const urlPath = pathname ? `/${pathname}` : '/';
            const url = `http://${host}:${PORT}${urlPath}`;
            const fullPath = path.join(STATIC_PAGES_DIR, normalized);
            const stats = fs.statSync(fullPath);
            const sizeKb = Math.max(stats.size / 1024, 0.1);
            return { host, urlPath, url, sizeKb };
        })
        .sort((a, b) => a.url.localeCompare(b.url));

    const items = links
        .map((link) => `<li><a href="${link.url}">${link.host}${link.urlPath}</a> (${link.sizeKb.toFixed(1)} KB)</li>`)
        .join('\n');

    return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Index des pages statiques</title>
</head>
<body>
  <h1>Index des pages statiques</h1>
  <ul>
    ${items}
  </ul>
</body>
</html>`;
}

app.use('/statics', express.static(STATICS_DIR));

app.get('/index', (req, res) => {
    res.type('html').send(buildIndexHtml());
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

    if (!candidatePath) {
        res.status(404).send('Not found');
        return;
    }

    res.sendFile(candidatePath);
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Static pages server running on http://127.0.0.1:${PORT}`);
});
