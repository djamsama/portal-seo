const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const SOURCE_DIR = path.resolve(__dirname, '..', 'pages');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'dist');
const STATICS_DIR = path.resolve(__dirname, '..', 'statics');
const IGNORE_DIR = 'statics';
const STATICS_URL_PREFIX = '/statics/';

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
            if (entry.name === IGNORE_DIR) return [];
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

function stripUrlParams(urlPath) {
    return urlPath.split('#')[0].split('?')[0];
}

function toLocalStaticsPath(urlPath) {
    if (!urlPath) return null;
    if (urlPath.startsWith('http://') || urlPath.startsWith('https://')) {
        try {
            const parsed = new URL(urlPath);
            return parsed.pathname;
        } catch (error) {
            return null;
        }
    }
    return urlPath;
}

function getStaticsRelativePath(urlPath) {
    const localPath = stripUrlParams(toLocalStaticsPath(urlPath) || '');
    if (localPath.startsWith(STATICS_URL_PREFIX)) {
        return path.posix.join('statics', localPath.slice(STATICS_URL_PREFIX.length));
    }
    if (localPath.startsWith('statics/')) {
        return path.posix.join('statics', localPath.slice('statics/'.length));
    }
    return null;
}

function copyStaticAsset(urlPath, outputDir) {
    const relativePath = getStaticsRelativePath(urlPath);
    if (!relativePath) return null;

    const sourcePath = path.join(STATICS_DIR, relativePath.replace(/^statics\//, ''));
    if (!fs.existsSync(sourcePath)) return null;

    const destinationPath = path.join(outputDir, relativePath);
    ensureDir(path.dirname(destinationPath));
    fs.copyFileSync(sourcePath, destinationPath);
    return `./${relativePath.replace(/\\/g, '/')}`;
}

function rewriteStaticsLinks(html, outputDir) {
    let result = html;

    result = result.replace(
        /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
        (match, href) => {
            const newPath = copyStaticAsset(href, outputDir);
            if (!newPath) return match;
            return match.replace(href, newPath);
        }
    );

    result = result.replace(
        /<script[^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>/gi,
        (match, src) => {
            const newPath = copyStaticAsset(src, outputDir);
            if (!newPath) return match;
            return match.replace(src, newPath);
        }
    );

    return result;
}

function writeStandalonePage(filePath) {
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
    const html = fs.readFileSync(filePath, 'utf8');
    const bundled = rewriteStaticsLinks(html, outputDir);
    fs.writeFileSync(outputPath, bundled, 'utf8');
    return true;
}

function createZip() {
    return new Promise((resolve, reject) => {
        ensureDir(OUTPUT_DIR);
        const zipPath = path.join(OUTPUT_DIR, 'dist.zip');
        if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

        const output = fs.createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(`Zip generated: ${zipPath}`);
            resolve();
        });

        archive.on('error', (error) => reject(error));
        archive.pipe(output);
        archive.glob('**/*', { cwd: OUTPUT_DIR, ignore: ['dist.zip'] });
        archive.finalize();
    });
}

async function buildStandalonePages() {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }

    const htmlFiles = collectHtmlFiles(SOURCE_DIR);
    let written = 0;

    htmlFiles.forEach((filePath) => {
        if (writeStandalonePage(filePath)) written += 1;
    });

    console.log(`Standalone pages generated: ${written}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);

    await createZip();

    const zipPath = path.join(OUTPUT_DIR, 'dist.zip');
    const tempZip = path.join(path.dirname(OUTPUT_DIR), 'dist.zip');
    fs.copyFileSync(zipPath, tempZip);
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    ensureDir(OUTPUT_DIR);
    fs.copyFileSync(tempZip, zipPath);
    fs.rmSync(tempZip);
}

buildStandalonePages().catch((error) => {
    console.error('Failed to generate standalone pages:', error);
    process.exit(1);
});
