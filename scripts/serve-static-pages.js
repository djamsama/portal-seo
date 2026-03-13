const express = require('express');
const path = require('path');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const STATIC_PAGES_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATICS_DIR = path.resolve(__dirname, '..', 'statics');
const INDEX_JSON_PATH = path.resolve(STATIC_PAGES_DIR, 'pagelist.json');
const INDEX_HTML_PATH = path.resolve(STATIC_PAGES_DIR, 'pagelist.html');

const MAINTENANCE_SCRIPT_TAG = '<script src="/statics/maintenance-banner.js"></script>';
const NEW_RELIC_SCRIPT_TAG = '<script src="/statics/newrelic.js"></script>';

const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_DB = process.env.MONGO_DB || 'portal-seo';
const MONGO_COLLECTION = process.env.MONGO_COLLECTION || 'page-cache';

const LOG_LEVEL = process.env.LOG_LEVEL || '';

function log(message) {
    if (!LOG_LEVEL) return;
    console.log(`[${new Date().toISOString()}] ${message}`);
}

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

let mongoClient;
let mongoClientPromise;

async function getMongoClient() {
    if (!MONGO_URI) return null;
    if (mongoClient) return mongoClient;
    if (!mongoClientPromise) {
        mongoClientPromise = MongoClient.connect(MONGO_URI, { maxPoolSize: 10 });
    }
    mongoClient = await mongoClientPromise;
    return mongoClient;
}

async function fetchPageFromMongo(urlKey) {
    try {
        const client = await getMongoClient();
        if (!client) return null;
        const collection = client.db(MONGO_DB).collection(MONGO_COLLECTION);
        const doc = await collection.findOne({ url: urlKey }, { sort: { date: -1 } });
        if (!doc || typeof doc.content !== 'string') return null;
        return doc.content;
    } catch (error) {
        console.warn('Mongo fetch error:', error.message || error);
        return null;
    }
}

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


const SITEMAPS_DIR = path.resolve(__dirname, '..', 'sitemaps');

const sitemapFiles = fs
    .readdirSync(SITEMAPS_DIR)
    .filter((fileName) => /^sitemaps_.+\.xml$/.test(fileName));

sitemapFiles.forEach((fileName) => {
    app.get(`/${fileName}`, (req, res) => {
        res.type('application/xml');
        res.sendFile(path.join(SITEMAPS_DIR, fileName));
    });
});

app.use('/sitemaps-ae', express.static(path.join(SITEMAPS_DIR, 'sitemaps-ae')));
app.use('/sitemaps-ag', express.static(path.join(SITEMAPS_DIR, 'sitemaps-ag')));
app.use('/sitemaps-ar', express.static(path.join(SITEMAPS_DIR, 'sitemaps-ar')));
app.use('/sitemaps-di', express.static(path.join(SITEMAPS_DIR, 'sitemaps-di')));
app.use('/sitemaps-me', express.static(path.join(SITEMAPS_DIR, 'sitemaps-me')));
app.use('/sitemaps-ne', express.static(path.join(SITEMAPS_DIR, 'sitemaps-ne')));

app.use(async (req, res) => {
    const host = normalizeHost(req.headers.host?.split(':')[0]);
    const pathname = normalizePathname(req.path);
    const hostAlternates = getHostAlternates(host);
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

    const mongoUrlKey = pathname === '/' ? host : `${host}_${pathname.replace(/^\//, '').replace(/\//g, '_')}`;
    const mongoContent = await fetchPageFromMongo(mongoUrlKey);
    if (mongoContent) {

        res.type('html').send(injectMaintenanceScript(mongoContent));
        log(`Served from MongoDB: ${mongoUrlKey} (ip: ${clientIp})`);
        return;
    }

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

    if (!candidatePath) {
        res.status(503).type('html').send(injectMaintenanceScript(''));
        log(`Not found, served maintenance: ${mongoUrlKey} (ip: ${clientIp})`);
        return;
    }

    res.setHeader('Cache-Control', 'public, max-age=300');
    res.sendFile(candidatePath, (error) => {
        if (error) {
            log(`File send error (${mongoUrlKey}) (ip: ${clientIp}): ${error.message || error}`);
            return;
        }
        log(`Served from file: ${candidatePath} (ip: ${clientIp})`);
    });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Static pages server running on http://127.0.0.1:${PORT}`);
});
