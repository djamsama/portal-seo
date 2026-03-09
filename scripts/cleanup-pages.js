const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..', 'pages');
const KEEP_ZIP_REGEX = /^drive-download-.*\.zip$/i;
const REMOVE_ZIPS = process.argv.includes('--remove-zips');

function shouldKeep(filePath) {
    if (REMOVE_ZIPS) return false;
    const name = path.basename(filePath);
    return KEEP_ZIP_REGEX.test(name);
}

function removeEmptyDirs(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    entries.forEach((entry) => {
        if (!entry.isDirectory()) return;
        const subDir = path.join(dirPath, entry.name);
        removeEmptyDirs(subDir);
        if (fs.readdirSync(subDir).length === 0) {
            fs.rmdirSync(subDir);
        }
    });
}

function cleanupDir(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    entries.forEach((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            cleanupDir(fullPath);
            return;
        }
        if (entry.isFile() && shouldKeep(fullPath)) return;
        fs.rmSync(fullPath, { force: true });
    });
}

function cleanupPages() {
    if (!fs.existsSync(ROOT_DIR)) {
        console.log('pages/ directory not found.');
        return;
    }

    cleanupDir(ROOT_DIR);
    removeEmptyDirs(ROOT_DIR);
    console.log('Cleanup completed.');
}

cleanupPages();
