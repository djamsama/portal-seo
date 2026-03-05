const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');

function normalizePathname(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
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

function extractUrlsFromCsv(csvPath) {
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

        try {
            const url = new URL(rawUrl.trim());
            const normalized = `${url.hostname.toLowerCase()}${normalizePathname(url.pathname || '/')}`;
            if (unique.has(normalized)) return;
            unique.add(normalized);
            urls.push(url.toString());
        } catch (error) {
            // ignore invalid urls
        }
    });

    return urls;
}

function normalizeDomain(rawDomain) {
    if (!rawDomain) return null;
    return rawDomain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
}

function matchesDomain(rawUrl, domain) {
    if (!domain) return true;
    try {
        const host = new URL(rawUrl).hostname.toLowerCase();
        return host === domain || host.endsWith(`.${domain}`);
    } catch (error) {
        return false;
    }
}

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function outputPathForUrl(rawUrl) {
    const url = new URL(rawUrl);
    const cleanPath = normalizePathname(url.pathname || '/');
    const outputDir = path.join(
        OUTPUT_DIR,
        url.hostname.toLowerCase(),
        cleanPath === '/' ? '' : cleanPath.replace(/^\//, '')
    );
    return path.join(outputDir, 'index.html');
}

function parseArgs(argv) {
    const args = argv.slice(2);
    const csvPath = args.find((arg) => !arg.startsWith('--'));
    const resourceArg = args.find((arg) => arg.startsWith('--resource-id='));
    const profileArg = args.find((arg) => arg.startsWith('--profile='));
    const browserArg = args.find((arg) => arg.startsWith('--browser='));
    const domainArg = args.find((arg) => arg.startsWith('--domain='));
    const timeoutArg = args.find((arg) => arg.startsWith('--timeout='));
    const limitArg = args.find((arg) => arg.startsWith('--limit='));
    const headless = args.includes('--headless');

    return {
        csvPath: csvPath ? path.resolve(process.cwd(), csvPath) : null,
        resourceId: resourceArg ? resourceArg.split('=')[1] : null,
        profileDir: path.resolve(process.cwd(), profileArg ? profileArg.split('=')[1] : '.playwright-gsc-profile'),
        downloadsDir: path.resolve(process.cwd(), 'gsc-downloads'),
        browser: browserArg ? browserArg.split('=')[1] : 'chrome',
        domain: normalizeDomain(domainArg ? domainArg.split('=')[1] : ''),
        timeoutSeconds: timeoutArg ? Number(timeoutArg.split('=')[1]) : 15,
        limit: limitArg ? Number(limitArg.split('=')[1]) : undefined,
        headless
    };
}

async function ensurePropertySelected(page, domain) {
    if (!domain) return;

    try {
        const domainInSearchBar = page
            .locator(`input[placeholder*="${domain}"]`)
            .first();
        if (await domainInSearchBar.count()) return;

        const switcherCandidates = [
            page.locator('button, div[role="button"], span').filter({ hasText: /Propri[eé]t[eé] de recherche|Search property/i }).first(),
            page.locator('button, div[role="button"], span').filter({ hasText: /directindustry\.com|archiexpo\.com|medicalexpo\.com|nauticexpo\.com/i }).first()
        ];

        let switcher = null;
        for (const candidate of switcherCandidates) {
            if (await candidate.count()) {
                switcher = candidate;
                break;
            }
        }
        if (!switcher) return;

        await switcher.click({ timeout: 6000 });

        const domainOption = page
            .locator('div[role="menuitem"], li, div, span, a')
            .filter({ hasText: new RegExp(`\\b${escapeRegExp(domain)}\\b`, 'i') })
            .first();

        if (await domainOption.count()) {
            await domainOption.click({ timeout: 4000 });
            await page.waitForTimeout(700);
        } else {
            await page.keyboard.press('Escape').catch(() => {});
        }
    } catch (error) {
        // Best effort only: do not block crawl if property switcher is flaky.
    }
}

async function openInspection(page, resourceId, inspectedUrl, domain) {
    if (resourceId) {
        const inspectUrl = `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(resourceId)}`;
        await page.goto(inspectUrl, { waitUntil: 'domcontentloaded' });
    } else {
        await page.goto('https://search.google.com/search-console', { waitUntil: 'domcontentloaded' });
        await ensurePropertySelected(page, domain);
    }

    let input = page.locator('input[placeholder*="Inspect"], input[aria-label*="Inspect"]').first();
    if (!await input.count()) {
        input = page.locator('input[placeholder*="Inspector"], input[aria-label*="Inspector"]').first();
    }
    if (!await input.count()) {
        input = page.locator('input[type="text"]').first();
    }

    await page.waitForTimeout(1500);
    await input.click({ timeout: 15000 });
    await page.keyboard.press('Control+A');
    await page.keyboard.type(inspectedUrl, { delay: 10 });
    await page.keyboard.press('Enter');
}

async function clickViewCrawledPage(page) {
    const button = page
        .locator('button, a, div[role="button"], span')
        .filter({ hasText: /AFFICHER LA PAGE EXPLOREE|AFFICHER LA PAGE EXPLORÉE|VIEW CRAWLED PAGE/i })
        .first();

    await button.waitFor({ state: 'visible', timeout: 45000 });
    await button.click();
    await page.locator('button, div[role="tab"], span, a').filter({ hasText: /^HTML$/i }).first().waitFor({ state: 'visible', timeout: 15000 });
}

async function extractHtmlFromPanel(page) {
    const htmlTab = page
        .locator('button, div[role="tab"], span, a')
        .filter({ hasText: /^HTML$/i })
        .first();
    if (await htmlTab.count()) {
        await htmlTab.click({ timeout: 10000 }).catch(() => {});
    }

    await page.waitForTimeout(800);

    const copyCandidates = [
        page.locator('button[aria-label*="Copier"], button[aria-label*="Copy"], [role="button"][aria-label*="Copier"], [role="button"][aria-label*="Copy"]').first(),
        page.locator('button[title*="Copier"], button[title*="Copy"], [role="button"][title*="Copier"], [role="button"][title*="Copy"]').first(),
        page.locator('[mattooltip*="Copier"], [mattooltip*="Copy"], [data-tooltip*="Copier"], [data-tooltip*="Copy"]').first(),
        page.locator('button, [role="button"], span').filter({ hasText: /content_copy|file_copy|copier|copy/i }).first()
    ];

    const panel = page.locator('aside, div, section').filter({ hasText: /Page explorée|Page exploree|Crawled page/i }).first();
    if (await panel.count()) {
        const panelButtons = panel.locator('button, [role="button"]');
        if (await panelButtons.count()) {
            copyCandidates.push(panelButtons.last());
        }
    }

    let clicked = false;
    for (const candidate of copyCandidates) {
        if (!await candidate.count()) continue;
        await page.evaluate(() => { window.__gscCopiedText = ''; });
        try {
            await candidate.click({ timeout: 3000 });
            clicked = true;
            break;
        } catch (error) {
            // try next candidate
        }
    }
    if (!clicked) return '';

    await page.waitForTimeout(350);
    const intercepted = await page.evaluate(() => (window.__gscCopiedText || '').toString());
    if (intercepted && (intercepted.includes('<html') || intercepted.includes('<!doctype'))) {
        return intercepted;
    }

    const clipboard = await page.evaluate(async () => navigator.clipboard.readText().catch(() => ''));
    if (clipboard && (clipboard.includes('<html') || clipboard.includes('<!doctype'))) {
        return clipboard;
    }

    return '';
}

function writeFailures(failures) {
    const reportPath = path.join(OUTPUT_DIR, 'gsc-crawl-failures.txt');
    const content = failures.length ? `${failures.join('\n')}\n` : '';
    fs.writeFileSync(reportPath, content, 'utf8');
    return reportPath;
}

async function withTimeout(task, timeoutMs, onTimeout, timeoutLabel) {
    let timer = null;
    let timedOut = false;
    const taskPromise = Promise.resolve().then(task);
    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(async () => {
            timedOut = true;
            try {
                await onTimeout();
            } catch (error) {
                // ignore cleanup failure
            }
            reject(new Error(`TIMEOUT_${timeoutLabel}`));
        }, timeoutMs);
    });

    try {
        return await Promise.race([taskPromise, timeoutPromise]);
    } finally {
        if (timer) clearTimeout(timer);
        if (timedOut) taskPromise.catch(() => {});
    }
}

async function main() {
    const { csvPath, resourceId, profileDir, downloadsDir, browser, domain, timeoutSeconds, limit, headless } = parseArgs(process.argv);

    if (!csvPath) {
        console.error('Usage: node scripts/gsc-playwright-crawl.js <gsc-export.csv> [--resource-id=sc-domain:directindustry.com] [--domain=archiexpo.com] [--timeout=15] [--profile=.playwright-gsc-profile] [--browser=chrome|chromium] [--limit=100] [--headless]');
        process.exit(1);
    }
    if (!fs.existsSync(csvPath)) {
        console.error(`CSV file not found: ${csvPath}`);
        process.exit(1);
    }

    const allUrls = extractUrlsFromCsv(csvPath);
    const domainFilteredUrls = domain ? allUrls.filter((rawUrl) => matchesDomain(rawUrl, domain)) : allUrls;
    const urls = Number.isInteger(limit) && limit > 0 ? domainFilteredUrls.slice(0, limit) : domainFilteredUrls;
    const effectiveResourceId = resourceId || (domain ? `sc-domain:${domain}` : null);
    ensureDir(OUTPUT_DIR);
    ensureDir(downloadsDir);
    const timeoutMs = Math.max(1, Number(timeoutSeconds) || 15) * 1000;

    const context = await chromium.launchPersistentContext(profileDir, {
        channel: browser === 'chromium' ? undefined : browser,
        acceptDownloads: true,
        downloadsPath: downloadsDir,
        headless,
        viewport: { width: 1440, height: 900 }
    });
    await context.addInitScript(() => {
        window.__gscCopiedText = '';
        try {
            const originalWriteText = navigator.clipboard && navigator.clipboard.writeText
                ? navigator.clipboard.writeText.bind(navigator.clipboard)
                : null;
            if (originalWriteText) {
                navigator.clipboard.writeText = async (text) => {
                    window.__gscCopiedText = (text || '').toString();
                    return originalWriteText(text);
                };
            }
        } catch (error) {
            // ignore clipboard patch failures
        }

        document.addEventListener('copy', (event) => {
            try {
                const text = event.clipboardData ? event.clipboardData.getData('text/plain') : '';
                if (text) window.__gscCopiedText = text;
            } catch (error) {
                // ignore
            }
        }, true);
    });
    await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'https://search.google.com' }).catch(() => {});
    let saved = 0;
    const failures = [];
    let abortedBecauseBrowserClosed = false;
    const runStart = Date.now();

    for (let i = 0; i < urls.length; i += 1) {
        const inspectedUrl = urls[i];
        const itemStart = Date.now();
        process.stdout.write(`[${i + 1}/${urls.length}] ${inspectedUrl}\n`);

        let page = null;
        try {
            page = await context.newPage();
            const html = await withTimeout(
                async () => {
                    await openInspection(page, effectiveResourceId, inspectedUrl, domain);
                    await clickViewCrawledPage(page);
                    return extractHtmlFromPanel(page);
                },
                timeoutMs,
                async () => {
                    if (page && !page.isClosed()) {
                        await page.close().catch(() => {});
                    }
                },
                `${Math.floor(timeoutMs / 1000)}s`
            );

            if (!html) {
                failures.push(`${inspectedUrl}\tNO_HTML_EXTRACTED`);
                const itemDurationSec = ((Date.now() - itemStart) / 1000).toFixed(1);
                process.stdout.write(`  failed (${itemDurationSec}s)\n`);
                continue;
            }

            const outputPath = outputPathForUrl(inspectedUrl);
            ensureDir(path.dirname(outputPath));
            fs.writeFileSync(outputPath, html, 'utf8');
            saved += 1;
            const itemDurationSec = ((Date.now() - itemStart) / 1000).toFixed(1);
            process.stdout.write(`  saved -> ${outputPath} (${itemDurationSec}s)\n`);
        } catch (error) {
            const message = error && error.message ? error.message : String(error);
            failures.push(`${inspectedUrl}\t${message}`);
            const itemDurationSec = ((Date.now() - itemStart) / 1000).toFixed(1);
            process.stdout.write(`  failed (${itemDurationSec}s)\n`);
            if (/has been closed|Target page, context or browser has been closed/i.test(message)) {
                abortedBecauseBrowserClosed = true;
                process.stdout.write('Browser/context was closed during crawl. Stopping early.\n');
                break;
            }
        } finally {
            if (page && !page.isClosed()) {
                await page.close().catch(() => {});
            }
        }
    }

    await context.close();

    const failureReport = writeFailures(failures);
    console.log(`URLs in CSV: ${urls.length}`);
    console.log(`Saved HTML files: ${saved}`);
    console.log(`Failures: ${failures.length}`);
    console.log(`Failure report: ${failureReport}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
    console.log(`Download directory: ${downloadsDir}`);
    if (domain) console.log(`Domain filter: ${domain}`);
    if (effectiveResourceId) console.log(`Resource ID: ${effectiveResourceId}`);
    console.log(`Per-URL timeout: ${Math.floor(timeoutMs / 1000)}s`);
    console.log(`Total duration: ${((Date.now() - runStart) / 1000).toFixed(1)}s`);
    if (abortedBecauseBrowserClosed) {
        console.log('Run stopped early because the browser window was closed.');
        console.log('Tip: do not close the Playwright browser while crawl is running.');
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
