# portal-seo

## Scripts npm

- `npm run dev` : démarre le serveur de rendu (parsing des noms de fichiers).
- `npm run build:static` : génère des pages statiques dans `static-pages/`.
- `npm run build:static:gsc -- <fichier.csv> [--limit=500]` : génère uniquement les pages listées dans un export Search Console. 
exemple avec le fichnier de test Tableaux.csv : ` npm run gsc:crawl -- .\Tableau.csv  --timeout=15 --domain=directindustry.com  --limit=100`
- `npm run gsc:login` : ouvre Chromium pour te connecter a Google Search Console et sauvegarder la session locale.
- `npm run gsc:crawl -- <fichier.csv> [--resource-id=sc-domain:directindustry.com] [--limit=100]` : extrait le HTML "Page exploree" via l interface Search Console.
- `npm run build:static` : génère des pages statiques dans `static-pages/` + `pagelist.*`.
  - Option : `node scripts/build-static-pages.js --source-dir-2 /path/to/pages` pour ajouter un second répertoire source.
- `npm run serve:static` : sert les pages statiques depuis `static-pages/`.
- `npm run replace:statics` : remplace les URLs `static.virtual-expo.com` dans `pages/`.
- `npm run extract:page-zips` : extrait tous les ZIPs présents dans `pages/`.
- `npm run cleanup:pages` : supprime tout dans `pages/` sauf `drive-download-*.zip`.
- `npm run process:pages` : exécute `extract:page-zips` → `replace:statics` → `build:static` → `cleanup:pages`.
  - Option : `npm run process:pages --source-dir-2=/path/to/pages` pour passer un second répertoire source au build.
- `npm run deploy:scp` : déploie le projet via SSH (sans `node_modules`, `.git`, `static-pages`) vers `198.244.201.115` et `141.94.195.5`.

## Endpoints utiles

- `http://<domaine>:3000/pagelist` : liste des pages (sans port dans les liens).
- `http://<domaine>:3000/robots.txt`

## Workflow recommandé

1. Déposer le ZIP `drive-download-*.zip` dans `pages/`.
2. Lancer `npm run process:pages` pour :
   - extraire les ZIPs,
   - remplacer les URLs static,
   - générer les pages statiques et la pagelist,
   - nettoyer `pages/`.
3. Démarrer le serveur statique : `npm run serve:static`.
4. Accéder à la liste des pages : `http://<domaine>:3000/pagelist`.

## Workflow Playwright (GSC)

### Installation Playwright

```bash
npm i -D playwright
npx playwright install chromium
```

Si tu utilises Chrome local (recommande), tu peux garder `--browser=chrome` dans les commandes.

1. Connexion initiale (1 fois) :

```bash
npm run gsc:login
```

2. Extraction HTML via URL Inspection :

```bash
npm run gsc:crawl -- .\\ton-export-gsc.csv --limit=100
```

Options utiles :
- `--profile=.playwright-gsc-profile` pour choisir un dossier de session.
- `--browser=chrome|chromium` (`chrome` par defaut, pour utiliser ton Chrome local).
- `--resource-id=sc-domain:directindustry.com` pour forcer une propriete GSC precise.
- `--domain=archiexpo.com` pour ne traiter que ce domaine (et ses sous-domaines) depuis le CSV.
- `--timeout=15` timeout par URL (en secondes), puis passage a l URL suivante.
- `--headless` pour lancer sans UI (apres validation des selecteurs).

Sorties :
- fichiers HTML ecrits dans `static-pages/<host>/<path>/index.html`
- erreurs dans `static-pages/gsc-crawl-failures.txt`
- telechargements navigateur dans `gsc-downloads/`

## Structure des dossiers

- `pages/` : pages HTML sources.
- `statics/` : assets statiques (JS/CSS) servis via `/statics`.
- `static-pages/` : sortie des pages statiques générées.
- `scripts/` : scripts utilitaires.
- `server.js` : serveur de rendu dynamique (parsing des noms de fichiers).

## Entrées à ajouter dans le fichier hosts

```text
127.0.0.1 pdf.aeroexpo.cn
127.0.0.1 pdf.aeroexpo.com.ru
127.0.0.1 pdf.aeroexpo.online
127.0.0.1 pdf.aeroexpo.online/de
127.0.0.1 pdf.aeroexpo.online/es
127.0.0.1 pdf.aeroexpo.online/fr
127.0.0.1 pdf.aeroexpo.online/it
127.0.0.1 pdf.aeroexpo.online/ja
127.0.0.1 pdf.aeroexpo.online/pt
127.0.0.1 trends.aeroexpo.online
127.0.0.1 trends.aeroexpo.online/de
127.0.0.1 trends.aeroexpo.online/fr
127.0.0.1 www.aeroexpo.cn
127.0.0.1 www.aeroexpo.com.ru
127.0.0.1 www.aeroexpo.online
127.0.0.1 www.aeroexpo.online/de
127.0.0.1 www.aeroexpo.online/es
127.0.0.1 www.aeroexpo.online/fr
127.0.0.1 www.aeroexpo.online/it
127.0.0.1 www.aeroexpo.online/ja
127.0.0.1 www.aeroexpo.online/pt

127.0.0.1 pdf.agriexpo.cn
127.0.0.1 pdf.agriexpo.online
127.0.0.1 pdf.agriexpo.online/de
127.0.0.1 pdf.agriexpo.online/es
127.0.0.1 pdf.agriexpo.online/fr
127.0.0.1 pdf.agriexpo.online/it
127.0.0.1 pdf.agriexpo.online/ja
127.0.0.1 pdf.agriexpo.online/pt
127.0.0.1 pdf.agriexpo.ru
127.0.0.1 trends.agriexpo.online
127.0.0.1 trends.agriexpo.online/de
127.0.0.1 trends.agriexpo.online/es
127.0.0.1 trends.agriexpo.online/fr
127.0.0.1 trends.agriexpo.online/it
127.0.0.1 www.agriexpo.cn
127.0.0.1 www.agriexpo.online
127.0.0.1 www.agriexpo.online/de
127.0.0.1 www.agriexpo.online/es
127.0.0.1 www.agriexpo.online/fr
127.0.0.1 www.agriexpo.online/it
127.0.0.1 www.agriexpo.online/ja
127.0.0.1 www.agriexpo.online/pt
127.0.0.1 www.agriexpo.ru

127.0.0.1 pdf.archiexpo.cn
127.0.0.1 pdf.archiexpo.com.ru
127.0.0.1 pdf.archiexpo.com
127.0.0.1 pdf.archiexpo.com/ja
127.0.0.1 pdf.archiexpo.com/pt
127.0.0.1 pdf.archiexpo.de
127.0.0.1 pdf.archiexpo.es
127.0.0.1 pdf.archiexpo.fr
127.0.0.1 pdf.archiexpo.it
127.0.0.1 trends.archiexpo.com
127.0.0.1 trends.archiexpo.de
127.0.0.1 trends.archiexpo.es
127.0.0.1 trends.archiexpo.fr
127.0.0.1 trends.archiexpo.it
127.0.0.1 www.archiexpo.cn
127.0.0.1 www.archiexpo.com.ru
127.0.0.1 www.archiexpo.com
127.0.0.1 www.archiexpo.com/ja
127.0.0.1 www.archiexpo.com/pt
127.0.0.1 www.archiexpo.de
127.0.0.1 www.archiexpo.es
127.0.0.1 www.archiexpo.fr
127.0.0.1 www.archiexpo.it

127.0.0.1 pdf.directindustry-china.cn
127.0.0.1 pdf.directindustry.com.ru
127.0.0.1 pdf.directindustry.com
127.0.0.1 pdf.directindustry.com/ja
127.0.0.1 pdf.directindustry.com/pt
127.0.0.1 pdf.directindustry.de
127.0.0.1 pdf.directindustry.es
127.0.0.1 pdf.directindustry.fr
127.0.0.1 pdf.directindustry.it
127.0.0.1 trends.directindustry.com
127.0.0.1 trends.directindustry.de
127.0.0.1 trends.directindustry.es
127.0.0.1 trends.directindustry.fr
127.0.0.1 trends.directindustry.it
127.0.0.1 www.directindustry-china.cn
127.0.0.1 www.directindustry.com.ru
127.0.0.1 www.directindustry.com
127.0.0.1 www.directindustry.com/ja
127.0.0.1 www.directindustry.com/pt
127.0.0.1 www.directindustry.de
127.0.0.1 www.directindustry.es
127.0.0.1 www.directindustry.fr
127.0.0.1 www.directindustry.it

127.0.0.1 pdf.medicalexpo.com.cn
127.0.0.1 pdf.medicalexpo.com.ru
127.0.0.1 pdf.medicalexpo.com
127.0.0.1 pdf.medicalexpo.com/ja
127.0.0.1 pdf.medicalexpo.com/pt
127.0.0.1 pdf.medicalexpo.de
127.0.0.1 pdf.medicalexpo.es
127.0.0.1 pdf.medicalexpo.fr
127.0.0.1 pdf.medicalexpo.it
127.0.0.1 pdf.medicalexpo.ru
127.0.0.1 trends.medicalexpo.com
127.0.0.1 trends.medicalexpo.de
127.0.0.1 trends.medicalexpo.es
127.0.0.1 trends.medicalexpo.fr
127.0.0.1 trends.medicalexpo.it
127.0.0.1 www.medicalexpo.com.cn
127.0.0.1 www.medicalexpo.com.ru
127.0.0.1 www.medicalexpo.com
127.0.0.1 www.medicalexpo.com/ja
127.0.0.1 www.medicalexpo.com/pt
127.0.0.1 www.medicalexpo.de
127.0.0.1 www.medicalexpo.es
127.0.0.1 www.medicalexpo.fr
127.0.0.1 www.medicalexpo.it
127.0.0.1 www.medicalexpo.ru

127.0.0.1 pdf.nauticexpo.cn
127.0.0.1 pdf.nauticexpo.com
127.0.0.1 pdf.nauticexpo.com/ja
127.0.0.1 pdf.nauticexpo.com/pt
127.0.0.1 pdf.nauticexpo.de
127.0.0.1 pdf.nauticexpo.es
127.0.0.1 pdf.nauticexpo.fr
127.0.0.1 pdf.nauticexpo.it
127.0.0.1 pdf.nauticexpo.ru
127.0.0.1 trends.nauticexpo.com
127.0.0.1 trends.nauticexpo.de
127.0.0.1 trends.nauticexpo.es
127.0.0.1 trends.nauticexpo.fr
127.0.0.1 trends.nauticexpo.it
127.0.0.1 www.nauticexpo.cn
127.0.0.1 www.nauticexpo.com
127.0.0.1 www.nauticexpo.com/ja
127.0.0.1 www.nauticexpo.com/pt
127.0.0.1 www.nauticexpo.de
127.0.0.1 www.nauticexpo.es
127.0.0.1 www.nauticexpo.fr
127.0.0.1 www.nauticexpo.it
127.0.0.1 www.nauticexpo.ru
```


