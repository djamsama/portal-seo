const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ROOT_DIR = path.resolve(__dirname, '..', 'pages');

function collectZipFiles(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) return collectZipFiles(fullPath);
        if (entry.isFile() && entry.name.toLowerCase().endsWith('.zip')) return [fullPath];
        return [];
    });
}

function extractZip(zipPath) {
    const targetDir = path.dirname(zipPath);
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(targetDir, true);
}

function extractAllZips() {
    const zipFiles = collectZipFiles(ROOT_DIR);

    if (!zipFiles.length) {
        console.log('No zip files found.');
        return;
    }

    zipFiles.forEach((zipPath) => {
        extractZip(zipPath);
        console.log(`Extracted: ${zipPath}`);
    });
}

extractAllZips();
