const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.resolve(__dirname, '..', 'pages');
const ZIP_BACKUP_DIR = path.resolve(__dirname, '..', '.pages-zip-backup');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');
const SKIP_ZIP_BACKUP = process.argv.includes('--skip-zip-backup');
const SKIP_ZIP_RESTORE = process.argv.includes('--skip-zip-restore');

function log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

function getArgValue(flag) {
    const index = process.argv.indexOf(flag);
    if (index === -1) return null;
    return process.argv[index + 1] || null;
}

function runCommand(command, args, options = {}) {
    const result = spawnSync(command, args, { stdio: 'inherit', ...options });
    if (result.error) {
        throw result.error;
    }
    return result.status || 0;
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
    if (SKIP_ZIP_BACKUP) {
        log('Skipping ZIP backup (flag --skip-zip-backup).');
        return 0;
    }

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
    if (SKIP_ZIP_RESTORE) {
        log('Skipping ZIP restore (flag --skip-zip-restore).');
        return 0;
    }

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

const sourceDir2Arg = getArgValue('--source-dir-2');
const appendOutput = process.argv.includes('--append-output');

log('Starting process:pages:batch');
log(`CLI args: ${process.argv.slice(2).join(' ') || '(none)'}`);
if (sourceDir2Arg) {
    log(`Secondary source dir for build: ${sourceDir2Arg}`);
}
if (appendOutput) {
    log('Append output enabled for build:static');
}

const backedUpCount = backupExistingZips();
if (backedUpCount > 0) {
    log(`Existing ZIPs backed up: ${backedUpCount}`);
}

const copyScript = path.resolve(__dirname, 'copy-pages-batch.js');
const copyArgs = [copyScript, ...process.argv.slice(2)];

log(`Running copy script: ${copyScript}`);
const copyExitCode = runCommand(process.execPath, copyArgs);
log(`Copy script exit code: ${copyExitCode}`);
if (copyExitCode === 2) {
    log('No files copied. Continuing with existing files.');
}
if (copyExitCode !== 0 && copyExitCode !== 2) {
    process.exit(copyExitCode);
}

log('Running extract:page-zips');
const extractExitCode = runCommand('npm', ['run', 'extract:page-zips']);
log(`extract:page-zips exit code: ${extractExitCode}`);
if (extractExitCode !== 0) {
    process.exit(extractExitCode);
}

log('Running replace:statics');
const replaceExitCode = runCommand('npm', ['run', 'replace:statics']);
log(`replace:statics exit code: ${replaceExitCode}`);
if (replaceExitCode !== 0) {
    process.exit(replaceExitCode);
}

const buildArgs = ['run', 'build:static'];
const buildFlags = [];
if (sourceDir2Arg) {
    buildFlags.push(`--source-dir-2=${sourceDir2Arg}`);
}
if (appendOutput) {
    buildFlags.push('--append-output');
}
if (buildFlags.length) {
    buildArgs.push('--', ...buildFlags);
}

log(`Running build:static with args: ${buildArgs.join(' ')}`);
const buildExitCode = runCommand('npm', buildArgs);
log(`build:static exit code: ${buildExitCode}`);
if (buildExitCode !== 0) {
    process.exit(buildExitCode);
}

const totalGenerated = countOutputPages();
log(`Static pages total after build: ${totalGenerated}`);

log('Running cleanup:pages:all');
const cleanupExitCode = runCommand('npm', ['run', 'cleanup:pages:all']);
log(`cleanup:pages:all exit code: ${cleanupExitCode}`);

const totalAfterCleanup = countOutputPages();
log(`Static pages total after cleanup: ${totalAfterCleanup}`);

const restoredCount = restoreBackupZips();
if (restoredCount > 0) {
    log(`ZIPs restored: ${restoredCount}`);
}

log('process:pages:batch completed');
process.exit(cleanupExitCode);
