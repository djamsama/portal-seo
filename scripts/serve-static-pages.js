const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const STATIC_PAGES_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATICS_DIR = path.resolve(__dirname, '..', 'pages', 'statics');

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

app.use('/statics', express.static(STATICS_DIR));

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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Static pages server running on http://0.0.0.0:${PORT}`);
});
