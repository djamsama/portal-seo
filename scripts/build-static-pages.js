const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, '..', 'pages');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATIC_DIR_NAME = 'statics';

function getArgValue(flag) {
    const index = process.argv.indexOf(flag);
    if (index === -1) return null;
    return process.argv[index + 1] || null;
}

const extraSourceDir = getArgValue('--source-dir-2');
const SOURCE_DIRS = [SOURCE_DIR, ...(extraSourceDir ? [path.resolve(extraSourceDir)] : [])];

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
        if (entry.isDirectory()) {
            if (entry.name === STATIC_DIR_NAME) return [];
            return collectHtmlFiles(fullPath);
        }
        if (entry.isFile() && entry.name.endsWith('.html')) return [fullPath];
        return [];
    });
}

function decodeFilename(filename) {
    const match = filename.match(/https___(.+)\.html$/);
    if (!match) return null;

    const full = match[1].replace(/_/g, '/');
    const url = new URL(`http://${full}`);

    return {
        host: normalizeHost(url.hostname),
        pathname: normalizePathname(url.pathname || '/')
    };
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
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

function writeStaticPage(filePath) {
    const filename = path.basename(filePath);
    const decoded = decodeFilename(filename);
    if (!decoded) return null;

    const outputDir = path.join(
        OUTPUT_DIR,
        decoded.host,
        decoded.pathname === '/' ? '' : decoded.pathname.replace(/^\//, '')
    );
    const outputPath = path.join(outputDir, 'index.html');

    ensureDir(outputDir);
    const html = fs.readFileSync(filePath, 'utf8');
    const withBanner = injectMaintenanceScript(html);
    fs.writeFileSync(outputPath, withBanner, 'utf8');

    const sizeBytes = fs.statSync(outputPath).size;
    const urlPath = decoded.pathname === '/' ? '/' : `/${decoded.pathname.replace(/^\//, '')}`;

    return {
        host: decoded.host,
        urlPath,
        sizeBytes
    };
}

function buildIndexFiles(entries) {
    const sorted = entries.sort((a, b) => `${a.host}${a.urlPath}`.localeCompare(`${b.host}${b.urlPath}`));
    const indexJsonPath = path.join(OUTPUT_DIR, 'pagelist.json');
    const indexHtmlPath = path.join(OUTPUT_DIR, 'pagelist.html');

    fs.writeFileSync(indexJsonPath, JSON.stringify(sorted, null, 2));

    const items = sorted
        .map((entry) => {
            const sizeKb = Math.max(entry.sizeBytes / 1024, 0.1);
            return `<li><a href="http://${entry.host}${entry.urlPath}">${entry.host}${entry.urlPath}</a> (${sizeKb.toFixed(1)} KB)</li>`;
        })
        .join('\n');

    const html = `<!doctype html>
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

    fs.writeFileSync(indexHtmlPath, html, 'utf8');
}

function buildStaticPages() {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }

    const entries = [];
    let written = 0;

    SOURCE_DIRS.forEach((sourceDir) => {
        if (!fs.existsSync(sourceDir)) {
            console.warn(`Source directory not found: ${sourceDir}`);
            return;
        }
        const htmlFiles = collectHtmlFiles(sourceDir);
        htmlFiles.forEach((filePath) => {
            const entry = writeStaticPage(filePath);
            if (entry) {
                entries.push(entry);
                written += 1;
            }
        });
    });

    buildIndexFiles(entries);

    console.log(`Static pages generated: ${written}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
}

buildStaticPages();
