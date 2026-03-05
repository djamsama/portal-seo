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

function normalizeUrl(rawUrl) {
    try {
        const url = new URL(rawUrl);
        return {
            host: normalizeHost(url.hostname),
            pathname: normalizePathname(url.pathname || '/')
        };
    } catch (error) {
        return null;
    }
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

function parseCsvLine(line, delimiter) {
    const cells = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                current += '"';
                i += 1;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }

        if (char === delimiter && !inQuotes) {
            cells.push(current);
            current = '';
            continue;
        }

        current += char;
    }

    cells.push(current);
    return cells;
}

function detectDelimiter(lines) {
    const candidates = [',', ';', '\t'];
    const sample = lines.slice(0, 5).filter((line) => line.trim().length > 0);
    if (!sample.length) return ',';

    let best = { delimiter: ',', score: -1 };
    candidates.forEach((delimiter) => {
        const score = sample.reduce((sum, line) => sum + parseCsvLine(line, delimiter).length, 0);
        if (score > best.score) best = { delimiter, score };
    });
    return best.delimiter;
}

function extractUrlsFromCsv(csvPath, limit) {
    const raw = fs.readFileSync(csvPath, 'utf8');
    const lines = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const delimiter = detectDelimiter(lines);
    const unique = new Set();
    const urls = [];

    lines.forEach((line) => {
        if (!line || !line.trim()) return;
        const cells = parseCsvLine(line, delimiter);
        const rawUrl = cells.find((cell) => /^https?:\/\//i.test(cell.trim()));
        if (!rawUrl) return;

        const decoded = normalizeUrl(rawUrl.trim());
        if (!decoded) return;

        const key = `${decoded.host}${decoded.pathname}`;
        if (unique.has(key)) return;

        unique.add(key);
        urls.push(decoded);
    });

    if (Number.isInteger(limit) && limit > 0) {
        return urls.slice(0, limit);
    }

    return urls;
}

function buildSourceIndex() {
    const htmlFiles = collectHtmlFiles(SOURCE_DIR);
    const map = new Map();

    htmlFiles.forEach((filePath) => {
        const decoded = decodeFilename(path.basename(filePath));
        if (!decoded) return;
        const key = `${decoded.host}${decoded.pathname}`;
        if (!map.has(key)) map.set(key, filePath);
    });

    return map;
}

function writeStaticPage(filePath, decodedUrl) {
    const outputDir = path.join(
        OUTPUT_DIR,
        decodedUrl.host,
        decodedUrl.pathname === '/' ? '' : decodedUrl.pathname.replace(/^\//, '')
    );
    const outputPath = path.join(outputDir, 'index.html');

    ensureDir(outputDir);
    const html = fs.readFileSync(filePath, 'utf8');
    const withBanner = injectMaintenanceScript(html);
    fs.writeFileSync(outputPath, withBanner, 'utf8');
}

function writeMissingUrlsReport(missingUrls) {
    const reportPath = path.join(OUTPUT_DIR, 'missing-urls.txt');
    const reportContent = missingUrls.length ? `${missingUrls.join('\n')}\n` : '';
    fs.writeFileSync(reportPath, reportContent, 'utf8');
    return reportPath;
}

function parseArgs(argv) {
    const args = argv.slice(2);
    const csvPath = args.find((arg) => !arg.startsWith('--'));
    const limitArg = args.find((arg) => arg.startsWith('--limit='));
    const limit = limitArg ? Number(limitArg.split('=')[1]) : undefined;
    return { csvPath, limit };
}

function main() {
    const { csvPath, limit } = parseArgs(process.argv);
    if (!csvPath) {
        console.error('Usage: node scripts/build-static-pages-from-gsc.js <gsc-export.csv> [--limit=500]');
        process.exit(1);
    }

    const absoluteCsvPath = path.resolve(process.cwd(), csvPath);
    if (!fs.existsSync(absoluteCsvPath)) {
        console.error(`CSV file not found: ${absoluteCsvPath}`);
        process.exit(1);
    }

    const urls = extractUrlsFromCsv(absoluteCsvPath, limit);
    const sourceIndex = buildSourceIndex();

    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }
    ensureDir(OUTPUT_DIR);

    const missingUrls = [];
    let written = 0;

    urls.forEach((decodedUrl) => {
        const key = `${decodedUrl.host}${decodedUrl.pathname}`;
        const sourceFile = sourceIndex.get(key);
        if (!sourceFile) {
            missingUrls.push(`https://${decodedUrl.host}${decodedUrl.pathname}`);
            return;
        }
        writeStaticPage(sourceFile, decodedUrl);
        written += 1;
    });

    const missingPath = writeMissingUrlsReport(missingUrls);
    console.log(`URLs in CSV: ${urls.length}`);
    console.log(`Static pages generated: ${written}`);
    console.log(`Missing URLs: ${missingUrls.length}`);
    console.log(`Missing report: ${missingPath}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
}

main();
