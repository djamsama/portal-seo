# portal-seo

## Entrées à ajouter dans le fichier hosts

```text
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
```

## Scripts npm

- `npm run dev` : démarre le serveur de rendu (parsing des noms de fichiers).
- `npm run build:static` : génère des pages statiques dans `static-pages/`.
- `npm run serve:static` : sert les pages statiques depuis `static-pages/`.

## Structure des dossiers

- `pages/` : pages HTML sources.
- `statics/` : assets statiques (JS/CSS) servis via `/statics`.
- `static-pages/` : sortie des pages statiques générées.
- `scripts/` : scripts de build et de serveur statique.
- `server.js` : serveur de rendu dynamique (parsing des noms de fichiers).