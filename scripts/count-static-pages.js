const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'static-pages');
const WWW_DASH_NAMES = new Set([
    'aeronautic-manufacturer',
    'agricultural-manufacturer',
    'architecture-design-manufacturer',
    'architektur-design-hersteller',
    'boat-manufacturer',
    'boot-hersteller',
    'fabbricante-aeronautico',
    'fabbricante-agricolo',
    'fabbricante-barca',
    'fabricant-aeronautique',
    'fabricant-agricole',
    'fabricant-bateau',
    'fabricante-aeronautico',
    'fabricante-agricola',
    'fabricante-arquitectura-design',
    'fabricante-barco',
    'fabricante-industrial',
    'fabricante-medical',
    'fabricant-industriel',
    'fabricant-medical',
    'industrial-manufacturer',
    'industrie-hersteller',
    'landwirtschaftlich-hersteller',
    'luftfahrt-hersteller',
    'medical-manufacturer',
    'medizin-hersteller',
    'proizvoditel-agri',
    'seizomoto-agri',
    'seizomoto-kogyo-bunya',
    'zhizaoshang-aero',
    'zhizaoshang-agri',
    'zhizaoshang-gongye'
]);

function log(message) {
    console.log(message);
}

function isHtmlFile(name) {
    return name.toLowerCase().endsWith('.html');
}

function countStaticPages() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        log(`Static pages root not found: ${OUTPUT_DIR}`);
        return;
    }

    const counts = {
        cat: { dirs: 0, html: 0 },
        prod: { dirs: 0, html: 0 },
        kwref: { dirs: 0, html: 0 },
        pdf: { dirs: 0, html: 0 },
        trends: { dirs: 0, html: 0 }
    };

    const stack = [
        {
            dirPath: OUTPUT_DIR,
            flags: {
                inCat: false,
                inProd: false,
                inKwref: false,
                inPdf: false,
                inTrends: false,
                inWww: false
            }
        }
    ];

    while (stack.length) {
        const { dirPath, flags } = stack.pop();
        let entries;
        try {
            entries = fs.readdirSync(dirPath, { withFileTypes: true });
        } catch (error) {
            log(`Unable to read directory: ${dirPath}`);
            continue;
        }

        const isRoot = dirPath === OUTPUT_DIR;

        entries.forEach((entry) => {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                const isRootChild = isRoot;
                const inWww = flags.inWww || (isRootChild && entry.name.startsWith('www.'));
                const isKwrefDir = inWww && WWW_DASH_NAMES.has(entry.name);
                const inKwref = flags.inKwref || isKwrefDir;
                const inCat = flags.inCat || entry.name === 'cat';
                const inProd = flags.inProd || entry.name === 'prod';
                const inPdf = flags.inPdf || (isRootChild && entry.name.startsWith('pdf.'));
                const inTrends = flags.inTrends || (isRootChild && entry.name.startsWith('trends.'));

                if (entry.name === 'cat') counts.cat.dirs += 1;
                if (entry.name === 'prod') counts.prod.dirs += 1;
                if (isRootChild && entry.name.startsWith('pdf.')) counts.pdf.dirs += 1;
                if (isRootChild && entry.name.startsWith('trends.')) counts.trends.dirs += 1;
                if (isKwrefDir) counts.kwref.dirs += 1;

                stack.push({
                    dirPath: fullPath,
                    flags: {
                        inCat,
                        inProd,
                        inKwref,
                        inPdf,
                        inTrends,
                        inWww
                    }
                });
            } else if (entry.isFile() && isHtmlFile(entry.name)) {
                if (flags.inCat) counts.cat.html += 1;
                if (flags.inProd) counts.prod.html += 1;
                if (flags.inKwref) counts.kwref.html += 1;
                if (flags.inPdf) counts.pdf.html += 1;
                if (flags.inTrends) counts.trends.html += 1;
            }
        });
    }

    const totalDirs = counts.cat.dirs + counts.prod.dirs + counts.kwref.dirs + counts.pdf.dirs + counts.trends.dirs;
    const totalHtmlFiles = counts.cat.html + counts.prod.html + counts.kwref.html + counts.pdf.html + counts.trends.html;

    log(`Static pages root: ${OUTPUT_DIR}`);
    log('');
    log('Summary (HTML files per category):');
    log(`- cat: ${counts.cat.html}`);
    log(`- prod: ${counts.prod.html}`);
    log(`- kwref: ${counts.kwref.html}`);
    log(`- pdf: ${counts.pdf.html}`);
    log(`- trends: ${counts.trends.html}`);
    log('');
    log('Summary (totals):');
    log(`- Total directories counted: ${totalDirs}`);
    log(`- Total HTML files counted: ${totalHtmlFiles}`);
}

countStaticPages();

