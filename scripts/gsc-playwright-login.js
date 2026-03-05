const path = require('path');
const { chromium } = require('playwright');

function ensureDir(dirPath) {
    require('fs').mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
    const args = argv.slice(2);
    const profileArg = args.find((arg) => arg.startsWith('--profile='));
    const browserArg = args.find((arg) => arg.startsWith('--browser='));
    const profileDir = profileArg ? profileArg.split('=')[1] : '.playwright-gsc-profile';
    const browser = browserArg ? browserArg.split('=')[1] : 'chrome';

    return {
        profileDir: path.resolve(process.cwd(), profileDir),
        downloadsDir: path.resolve(process.cwd(), 'gsc-downloads'),
        browser
    };
}

async function main() {
    const { profileDir, downloadsDir, browser } = parseArgs(process.argv);
    ensureDir(downloadsDir);
    const context = await chromium.launchPersistentContext(profileDir, {
        channel: browser === 'chromium' ? undefined : browser,
        acceptDownloads: true,
        downloadsPath: downloadsDir,
        headless: false,
        viewport: { width: 1440, height: 900 }
    });

    const page = context.pages()[0] || await context.newPage();
    await page.goto('https://search.google.com/search-console', { waitUntil: 'domcontentloaded' });

    console.log('Connecte-toi a Google/Search Console dans cette fenetre.');
    console.log('Quand c est OK, appuie sur Entree ici pour sauvegarder la session.');

    await new Promise((resolve) => {
        process.stdin.resume();
        process.stdin.once('data', () => resolve());
    });

    await context.close();
    console.log(`Session enregistree dans: ${profileDir}`);
    console.log(`Dossier de telechargement navigateur: ${downloadsDir}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
