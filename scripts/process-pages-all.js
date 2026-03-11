const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DEFAULT_SOURCE_DIR = '/var/ve-botify';
const DEFAULT_BATCH_SIZE = 10000;
const DEFAULT_STATE_FILE = path.resolve(__dirname, '..', '.batch-progress.json');
const PAGES_DIR = path.resolve(__dirname, '..', 'pages');
const ZIP_BACKUP_DIR = path.resolve(__dirname, '..', '.pages-zip-backup');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');

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

function runCommand(command, args, options = {}) {
    const result = spawnSync(command, args, { stdio: 'inherit', ...options });
    if (result.error) {
        throw result.error;
    }
    return result.status || 0;
}

function readStateLastProcessed(stateFile) {
    if (!fs.existsSync(stateFile)) return null;
    try {
        const raw = fs.readFileSync(stateFile, 'utf8');
        const data = JSON.parse(raw);
        return typeof data.lastProcessed === 'string' ? data.lastProcessed : null;
    } catch (error) {
        log(`Unable to read state file: ${stateFile}`);
        return null;
    }
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function collectZipFiles(dirPath) {
    if (!fs.existsSync(dirPath)) return [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) return collectZipFiles(fullPath);
        if (entry.isFile() && entry.name.toLowerCase().endsWith('.zip')) return [fullPath];
        return [];
    });
}

function backupExistingZips() {
    log(`Scanning for existing ZIPs in ${PAGES_DIR}`);
    const zipFiles = collectZipFiles(PAGES_DIR);
    log(`ZIPs found for backup: ${zipFiles.length}`);
    if (!zipFiles.length) return 0;

    if (fs.existsSync(ZIP_BACKUP_DIR)) {
        log(`Removing existing backup directory: ${ZIP_BACKUP_DIR}`);
        fs.rmSync(ZIP_BACKUP_DIR, { recursive: true, force: true });
    }

    zipFiles.forEach((zipPath, index) => {
        const relative = path.relative(PAGES_DIR, zipPath);
        const backupPath = path.join(ZIP_BACKUP_DIR, relative);
        ensureDir(path.dirname(backupPath));
        log(`Backing up (${index + 1}/${zipFiles.length}): ${relative}`);
        fs.copyFileSync(zipPath, backupPath);
    });

    log(`ZIP backup completed: ${zipFiles.length}`);
    return zipFiles.length;
}

function restoreBackupZips() {
    if (!fs.existsSync(ZIP_BACKUP_DIR)) {
        log('No ZIP backup directory found. Skipping restore.');
        return 0;
    }

    const zipFiles = collectZipFiles(ZIP_BACKUP_DIR);
    log(`ZIPs found for restore: ${zipFiles.length}`);

    zipFiles.forEach((zipPath, index) => {
        const relative = path.relative(ZIP_BACKUP_DIR, zipPath);
        const destPath = path.join(PAGES_DIR, relative);
        ensureDir(path.dirname(destPath));
        log(`Restoring (${index + 1}/${zipFiles.length}): ${relative}`);
        fs.copyFileSync(zipPath, destPath);
    });

    log(`Cleaning backup directory: ${ZIP_BACKUP_DIR}`);
    fs.rmSync(ZIP_BACKUP_DIR, { recursive: true, force: true });
    log(`ZIP restore completed: ${zipFiles.length}`);
    return zipFiles.length;
}

function countOutputPages() {
    const indexJsonPath = path.join(OUTPUT_DIR, 'pagelist.json');
    if (fs.existsSync(indexJsonPath)) {
        try {
            const raw = fs.readFileSync(indexJsonPath, 'utf8');
            const data = JSON.parse(raw);
            if (Array.isArray(data)) {
                return data.length;
            }
        } catch (error) {
            log(`Unable to parse pagelist.json: ${indexJsonPath}`);
        }
    }

    if (!fs.existsSync(OUTPUT_DIR)) return 0;
    const walk = (dirPath) => {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        return entries.flatMap((entry) => {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isDirectory()) return walk(fullPath);
            if (entry.isFile() && entry.name === 'index.html') return [fullPath];
            return [];
        });
    };

    return walk(OUTPUT_DIR).length;
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

function getLastSourceFile(sourceDir) {
    if (!fs.existsSync(sourceDir)) return null;
    const entries = listFilesSortedRelative(sourceDir);
    return entries.length ? entries[entries.length - 1] : null;
}

const sourceDirArg = getArgValue('--source-dir');
const batchSizeArg = getArgValue('--batch-size');
const stateFileArg = getArgValue('--state-file');
const sourceDir2Arg = getArgValue('--source-dir-2');

const sourceDir = sourceDirArg ? path.resolve(sourceDirArg) : DEFAULT_SOURCE_DIR;
const batchSize = toPositiveInt(batchSizeArg, DEFAULT_BATCH_SIZE);
const stateFile = stateFileArg ? path.resolve(stateFileArg) : DEFAULT_STATE_FILE;

log('Starting process:pages:all');
log(`Source directory: ${sourceDir}`);
log(`Batch size: ${batchSize}`);
log(`State file: ${stateFile}`);
if (sourceDir2Arg) {
    log(`Secondary source dir for build: ${sourceDir2Arg}`);
}

const backedUpCount = backupExistingZips();
if (backedUpCount > 0) {
    log(`Existing ZIPs backed up: ${backedUpCount}`);
}

let iteration = 0;
while (true) {
    iteration += 1;
    const lastSourceFile = getLastSourceFile(sourceDir);
    if (!lastSourceFile) {
        log('No files found in source directory. Exiting.');
        break;
    }

    const lastProcessed = readStateLastProcessed(stateFile);
    log(`Iteration ${iteration} - last source file: ${lastSourceFile}`);
    log(`Iteration ${iteration} - last processed file: ${lastProcessed || '(none)'}`);

    if (lastProcessed === lastSourceFile) {
        log('All files processed. Exiting.');
        break;
    }

    const batchArgs = [
        'run',
        'process:pages:batch',
        '--',
        '--batch-size',
        `${batchSize}`,
        '--source-dir',
        sourceDir,
        '--state-file',
        stateFile,
        '--skip-zip-backup',
        '--skip-zip-restore',
        '--append-output'
    ];
    if (sourceDir2Arg) {
        batchArgs.push('--source-dir-2', sourceDir2Arg);
    }

    log(`Running batch ${iteration}: ${batchArgs.join(' ')}`);
    const exitCode = runCommand('npm', batchArgs);
    log(`Batch ${iteration} exit code: ${exitCode}`);

    if (exitCode !== 0) {
        process.exit(exitCode);
    }

    const totalGenerated = countOutputPages();
    log(`Static pages total after batch ${iteration}: ${totalGenerated}`);
}

const restoredCount = restoreBackupZips();
if (restoredCount > 0) {
    log(`ZIPs restored: ${restoredCount}`);
}

const totalGenerated = countOutputPages();
log(`Static pages total after all batches: ${totalGenerated}`);

log('process:pages:all completed');
