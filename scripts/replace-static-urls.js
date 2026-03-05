const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..', 'pages');
const IGNORE_DIR = 'statics';

const REPLACEMENTS = [
    {
        from: 'https://static.virtual-expo.com/media/ps/',
        to: '/statics/'
    },
    {
        from: 'https://static.virtual-expo.com/dyn/',
        to: '/statics/dist/'
    }
];

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

function replaceInFile(filePath) {
    const original = fs.readFileSync(filePath, 'utf8');
    let updated = original;

    REPLACEMENTS.forEach(({ from, to }) => {
        updated = updated.split(from).join(to);
    });

    if (updated !== original) {
        fs.writeFileSync(filePath, updated, 'utf8');
        return true;
    }

    return false;
}

function replaceStaticUrls() {
    const files = collectHtmlFiles(ROOT_DIR);
    let updatedCount = 0;

    files.forEach((filePath) => {
        if (replaceInFile(filePath)) updatedCount += 1;
    });

    console.log(`Updated files: ${updatedCount}`);
}

replaceStaticUrls();
