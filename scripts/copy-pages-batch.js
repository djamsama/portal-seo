const fs = require('fs');
const path = require('path');

const DEFAULT_SOURCE_DIR = '/var/ve-botify';
const DEFAULT_DEST_DIR = path.resolve(__dirname, '..', 'pages');
const DEFAULT_BATCH_SIZE = 10000;
const DEFAULT_STATE_FILE = path.resolve(__dirname, '..', '.batch-progress.json');

function log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

function getArgValue(flag) {
    const index = process.argv.indexOf(flag);
    if (index === -1) return null;
    return process.argv[index + 1] || null;
}

function toPositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed) || parsed <= 0) return fallback;
    return parsed;
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function listFilesSorted(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            return listFilesSorted(fullPath);
        }
        if (entry.isFile()) {
            return [fullPath];
        }
        return [];
    });
}

function listFilesSortedRelative(dirPath) {
    return listFilesSorted(dirPath)
        .map((fullPath) => path.relative(dirPath, fullPath))
        .sort((a, b) => a.localeCompare(b));
}

function readState(stateFile) {
    if (!fs.existsSync(stateFile)) return null;
    try {
        const raw = fs.readFileSync(stateFile, 'utf8');
        const data = JSON.parse(raw);
        if (!data || typeof data.lastProcessed !== 'string') return null;
        return data;
    } catch (error) {
        console.warn(`Unable to read state file: ${stateFile}`);
        return null;
    }
}

function writeState(stateFile, data) {
    fs.writeFileSync(stateFile, JSON.stringify(data, null, 2));
}

function copyBatchFiles({ sourceDir, destDir, batchSize, stateFile }) {
    log('Starting batch copy');
    log(`Source directory: ${sourceDir}`);
    log(`Destination directory: ${destDir}`);
    log(`Batch size: ${batchSize}`);
    log(`State file: ${stateFile}`);

    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory not found: ${sourceDir}`);
        process.exit(1);
    }

    ensureDir(destDir);

    const state = readState(stateFile);
    if (state && state.lastProcessed) {
        log(`Last processed file from state: ${state.lastProcessed}`);
    } else {
        log('No previous state found. Starting from the first file.');
    }

    const files = listFilesSortedRelative(sourceDir);
    log(`Total files in source (recursive): ${files.length}`);

    let startIndex = 0;

    if (state && state.lastProcessed) {
        const lastIndex = files.indexOf(state.lastProcessed);
        if (lastIndex >= 0) {
            startIndex = lastIndex + 1;
            log(`Resuming from index: ${startIndex}`);
        } else {
            log('Last processed file not found in source. Restarting from first file.');
        }
    }

    const batchFiles = files.slice(startIndex, startIndex + batchSize);

    if (batchFiles.length === 0) {
        log('No files to copy. All files are already processed.');
        process.exit(2);
    }

    log(`Batch file count: ${batchFiles.length}`);
    log(`Batch first file: ${batchFiles[0]}`);
    log(`Batch last file: ${batchFiles[batchFiles.length - 1]}`);

    let copied = 0;

    batchFiles.forEach((relativePath, index) => {
        const sourcePath = path.join(sourceDir, relativePath);
        const destPath = path.join(destDir, relativePath);
        ensureDir(path.dirname(destPath));
        log(`Copying (${index + 1}/${batchFiles.length}): ${relativePath}`);
        fs.copyFileSync(sourcePath, destPath);
        copied += 1;
    });

    const statePayload = {
        lastProcessed: batchFiles[batchFiles.length - 1],
        updatedAt: new Date().toISOString(),
        sourceDir,
        destDir,
        batchSize,
        copied
    };

    writeState(stateFile, statePayload);

    log(`State saved: ${JSON.stringify(statePayload)}`);
    log(`Files copied: ${copied}`);
    log('Batch copy completed');
}

const sourceDirArg = getArgValue('--source-dir');
const destDirArg = getArgValue('--dest-dir');
const batchSizeArg = getArgValue('--batch-size');
const stateFileArg = getArgValue('--state-file');

const sourceDir = sourceDirArg ? path.resolve(sourceDirArg) : DEFAULT_SOURCE_DIR;
const destDir = destDirArg ? path.resolve(destDirArg) : DEFAULT_DEST_DIR;
const batchSize = toPositiveInt(batchSizeArg, DEFAULT_BATCH_SIZE);
const stateFile = stateFileArg ? path.resolve(stateFileArg) : DEFAULT_STATE_FILE;

copyBatchFiles({ sourceDir, destDir, batchSize, stateFile });
