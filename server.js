const express = require('express');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;  // port HTTP de dev
const DIRECTORY = process.env.STATIC_PAGES_DIR || './static-pages'; // dossier avec tous les fichiers HTML
const DIRECTORY_ABS = path.resolve(DIRECTORY);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const MONGODB_DB = process.env.MONGODB_DB || 'portal-seo';
const PAGE_CACHE_COLLECTION = process.env.MONGODB_COLLECTION || 'page-cache';
const MONGODB_MANAGE_SCHEMA = (process.env.MONGODB_MANAGE_SCHEMA || 'false') === 'true';
const ALLOW_START_WITHOUT_MONGO = (process.env.ALLOW_START_WITHOUT_MONGO || 'true') === 'true';
const DEBUG_MONGO_URL_MATCH = (process.env.DEBUG_MONGO_URL_MATCH || 'false') === 'true';
const LOG_RESPONSE_SOURCE = (process.env.LOG_RESPONSE_SOURCE || 'false') === 'true';

const mongoClient = new MongoClient(MONGODB_URI);
let mongoDb;

async function ensureMongoCollections(db) {
    if (!MONGODB_MANAGE_SCHEMA) return;

    const validator = {
        $jsonSchema: {
            bsonType: 'object',
            required: ['site', 'date', 'url', 'content'],
            properties: {
                site: { bsonType: 'string' },
                date: { bsonType: 'date' },
                url: { bsonType: 'string' },
                content: { bsonType: 'string' }
            }
        }
    };

    const collections = await db.listCollections({ name: PAGE_CACHE_COLLECTION }).toArray();

    if (collections.length === 0) {
        await db.createCollection(PAGE_CACHE_COLLECTION, {
            validator
        });
    } else {
        await db.command({
            collMod: PAGE_CACHE_COLLECTION,
            validator
        });
    }

    await db.collection(PAGE_CACHE_COLLECTION).createIndex(
        { site: 1, date: 1, url: 1 },
        { unique: true, name: 'uniq_site_date_url' }
    );

    await db.collection(PAGE_CACHE_COLLECTION).createIndex(
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

function toUnderscoreUrlKey(host, pathname) {
    const cleanPath = normalizePathname(pathname);
    const withoutLeadingSlash = cleanPath.replace(/^\//, '');

    if (!withoutLeadingSlash) {
        return `${host}_.html`;
    }

    return `${host}_${withoutLeadingSlash.replace(/\//g, '_')}`;
}

function buildMongoUrlCandidates(hostAlternates, pathname) {
    const candidates = new Set();
    const isRootPath = pathname === '/';

    for (const host of hostAlternates) {
        // Nouveau format prod: host + path avec "_" a la place de "/"
        const underscoreKey = toUnderscoreUrlKey(host, pathname);
        candidates.add(underscoreKey);

        if (underscoreKey.endsWith('.html')) {
            candidates.add(underscoreKey.slice(0, -5));
        } else {
            candidates.add(`${underscoreKey}.html`);
        }

        // Compat format precedent
        const base = `https://${host}${pathname}`;
        const normalized = normalizeUrl(base);
        if (normalized) candidates.add(normalized);
        candidates.add(`${host}${pathname}`);
        if (isRootPath) {
            candidates.add(host);
        }
    }
    return Array.from(candidates);
}

function shouldDebugMongoMatch(pathname) {
    const ignoredPrefixes = [
        '/ajax/',
        '/statics/',
        '/tracking/',
        '/cdn-cgi/',
        '/jsErrorHandler'
    ];

    if (ignoredPrefixes.some((prefix) => pathname.startsWith(prefix))) {
        return false;
    }

    const ignoredExt = [
        '.js', '.css', '.map',
        '.woff', '.woff2', '.ttf', '.eot', '.otf',
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico',
        '.json', '.xml', '.txt'
    ];

    return !ignoredExt.some((ext) => pathname.endsWith(ext));
}

function collectHtmlFiles(dirPath) {
    if (!fs.existsSync(dirPath)) return [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) return collectHtmlFiles(fullPath);
        if (entry.isFile() && entry.name.endsWith('.html')) return [fullPath];
        return [];
    });
}

function decodeFilePath(filePath) {
    const relative = path.relative(DIRECTORY_ABS, filePath);
    if (!relative || relative.startsWith('..')) return null;

    const parts = relative.split(path.sep).filter(Boolean);
    if (parts.length < 2) return null;

    const host = normalizeHost(parts[0]);
    if (!host) return null;

    const last = parts[parts.length - 1];
    if (!last.endsWith('.html')) return null;

    let pathnameParts = parts.slice(1, -1);
    if (last !== 'index.html') {
        pathnameParts = [...pathnameParts, last.replace(/\.html$/, '')];
    }

    const rawPathname = pathnameParts.length ? `/${pathnameParts.join('/')}` : '/';
    return {
        host,
        pathname: normalizePathname(rawPathname)
    };
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
collectHtmlFiles(DIRECTORY_ABS).forEach(filePath => {
    const filename = path.basename(filePath);
    const decoded = decodeFilePath(filePath) || decodeFilename(filename);
    if (!decoded) return;

    const key = decoded.host + decoded.pathname;
    urlMap[key] = filePath;
    if (decoded.pathname === '/') {
        urlMap[decoded.host] = filePath;
    }
});

if (!fs.existsSync(DIRECTORY)) {
    console.warn(`Static directory not found: ${path.resolve(DIRECTORY)}`);
}

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
    const urlCandidates = buildMongoUrlCandidates(hostAlternates, pathname);
    if (DEBUG_MONGO_URL_MATCH && shouldDebugMongoMatch(pathname)) {
        console.log('[mongo-url-match]', { host, pathname, urlCandidates });
    }

    try {
        if (mongoDb) {
            const mongoRow = await mongoDb.collection(PAGE_CACHE_COLLECTION).findOne(
                { url: { $in: urlCandidates } },
                { sort: { date: -1 } }
            );

            const html = mongoRow?.content || mongoRow?.code_source;
            if (typeof html === 'string') {
                if (LOG_RESPONSE_SOURCE) {
                    console.log('[response-source]', {
                        source: 'mongo',
                        host,
                        pathname,
                        matchedUrl: mongoRow?.url || null,
                        file: mongoRow?.file || null
                    });
                }
                res.type('html').send(injectMaintenanceScript(html));
                return;
            }
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
        if (LOG_RESPONSE_SOURCE) {
            console.log('[response-source]', {
                source: 'none',
                host,
                pathname
            });
        }
        res.status(503).type('html').send(injectMaintenanceScript(''));
        return;
    }

    fs.readFile(path.resolve(file), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        if (LOG_RESPONSE_SOURCE) {
            console.log('[response-source]', {
                source: 'static-file',
                host,
                pathname,
                file
            });
        }
        res.type('html').send(injectMaintenanceScript(data));
    });
});

async function startServer() {
    let mongoReady = false;
    try {
        await mongoClient.connect();
        mongoDb = mongoClient.db(MONGODB_DB);
        await ensureMongoCollections(mongoDb);
        console.log(`MongoDB connected on db "${MONGODB_DB}"`);
        console.log(`MongoDB collection ready: "${PAGE_CACHE_COLLECTION}"`);
        mongoReady = true;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        if (!ALLOW_START_WITHOUT_MONGO) {
            process.exit(1);
        }
        console.warn('Starting server without MongoDB (fallback static mode).');
    }

    app.listen(PORT, '0.0.0.0', () => {
        const mode = mongoReady ? 'mongo+static' : 'static-only';
        console.log(`HTTP server running on http://0.0.0.0:${PORT} (${mode})`);
    });
}

startServer();

