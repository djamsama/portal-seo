const express = require('express');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;  // port HTTP de dev
const DIRECTORY = './pages'; // dossier avec tous les fichiers HTML

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://root:rootpass123@127.0.0.1:27017/portal_seo?authSource=admin';
const MONGODB_DB = process.env.MONGODB_DB || 'portal_seo';
const SITE_DATE_URL_COLLECTION = 'site_date_url';

const mongoClient = new MongoClient(MONGODB_URI);
let mongoDb;

async function ensureMongoCollections(db) {
    const validator = {
        $jsonSchema: {
            bsonType: 'object',
            required: ['site', 'date', 'url', 'code_source'],
            properties: {
                site: { bsonType: 'string' },
                date: { bsonType: 'date' },
                url: { bsonType: 'string' },
                code_source: { bsonType: 'string' }
            }
        }
    };

    const collections = await db.listCollections({ name: SITE_DATE_URL_COLLECTION }).toArray();

    if (collections.length === 0) {
        await db.createCollection(SITE_DATE_URL_COLLECTION, {
            validator
        });
    } else {
        await db.command({
            collMod: SITE_DATE_URL_COLLECTION,
            validator
        });
    }

    await db.collection(SITE_DATE_URL_COLLECTION).createIndex(
        { site: 1, date: 1, url: 1 },
        { unique: true, name: 'uniq_site_date_url' }
    );

    await db.collection(SITE_DATE_URL_COLLECTION).createIndex(
        { url: 1, date: -1 },
        { name: 'idx_url_date_desc' }
    );
}

function normalizePathname(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
}

function normalizeHost(hostname) {
    return (hostname || '').toLowerCase();
}

function normalizeUrl(urlValue) {
    try {
        const parsed = new URL(urlValue);
        const protocol = parsed.protocol.toLowerCase();
        const host = parsed.hostname.toLowerCase();
        const pathname = normalizePathname(parsed.pathname || '/');
        return `${protocol}//${host}${pathname}`;
    } catch {
        return null;
    }
}

function buildUrlCandidates(hostAlternates, pathname) {
    const candidates = new Set();
    for (const host of hostAlternates) {
        const base = `https://${host}${pathname}`;
        const normalized = normalizeUrl(base);
        if (normalized) candidates.add(normalized);

        if (pathname !== '/') {
            const withTrailing = normalizeUrl(`${base}/`);
            if (withTrailing) candidates.add(withTrailing);
        }
    }
    return Array.from(candidates);
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
app.get('/statics/maintenance-banner.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, '/statics/maintenance-banner.js'));
});

function injectMaintenanceScript(html) {
    const scriptTag = '<script src="/statics/maintenance-banner.js"></script>';
    if (html.includes(scriptTag)) return html;

    const headClose = /<\/head>/i;
    if (headClose.test(html)) {
        return html.replace(headClose, `${scriptTag}\n</head>`);
    }

    return `${scriptTag}\n${html}`;
}

// Middleware pour servir les fichiers
app.use(async (req, res) => {
    const host = normalizeHost(req.headers.host?.split(':')[0]); // retirer port si présent
    const pathname = normalizePathname(req.path);
    const hostAlternates = getHostAlternates(host);
    const urlCandidates = buildUrlCandidates(hostAlternates, pathname);

    try {
        const mongoRow = await mongoDb.collection(SITE_DATE_URL_COLLECTION).findOne(
            { url: { $in: urlCandidates } },
            { sort: { date: -1 } }
        );

        if (mongoRow && typeof mongoRow.code_source === 'string') {
            res.type('html').send(injectMaintenanceScript(mongoRow.code_source));
            return;
        }
    } catch (error) {
        console.error('MongoDB read error:', error.message);
    }

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

async function startServer() {
    try {
        await mongoClient.connect();
        mongoDb = mongoClient.db(MONGODB_DB);
        await ensureMongoCollections(mongoDb);
        console.log(`MongoDB connected on db "${MONGODB_DB}"`);
        console.log(`MongoDB collection ready: "${SITE_DATE_URL_COLLECTION}"`);

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`HTTP server running on http://0.0.0.0:${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

startServer();

