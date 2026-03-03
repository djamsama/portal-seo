const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, '..', 'pages');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');
const STATIC_DIR_NAME = 'statics';

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

function writeStaticPage(filePath) {
    const filename = path.basename(filePath);
    const decoded = decodeFilename(filename);
    if (!decoded) return false;

    const outputDir = path.join(
        OUTPUT_DIR,
        decoded.host,
        decoded.pathname === '/' ? '' : decoded.pathname.replace(/^\//, '')
    );
    const outputPath = path.join(outputDir, 'index.html');

    ensureDir(outputDir);
    fs.copyFileSync(filePath, outputPath);
    return true;
}

function buildStaticPages() {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }

    const htmlFiles = collectHtmlFiles(SOURCE_DIR);
    let written = 0;

    htmlFiles.forEach((filePath) => {
        if (writeStaticPage(filePath)) written += 1;
    });

    console.log(`Static pages generated: ${written}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
}

buildStaticPages();
