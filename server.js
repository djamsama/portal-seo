const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DIRECTORY = './pages';

// Decode le nom de fichier en host + path
function decodeFilename(filename) {
    const match = filename.match(/https___(.+)\.html$/);
    if (!match) return null;

    let full = match[1]; // ex: trends.directindustry.it_

    // remplace _ par /
    full = full.replace(/_/g, '/');

    const url = new URL('https://' + full);

    return {
        host: url.hostname,
        pathname: url.pathname || '/'
    };
}

// Construire mapping host+path → fichier
let urlMap = {};
fs.readdirSync(DIRECTORY).forEach(file => {
    const decoded = decodeFilename(file);
    if (!decoded) return;

    const key = decoded.host + decoded.pathname;
    urlMap[key] = path.join(DIRECTORY, file);
});

app.use((req, res) => {
    const host = req.headers.host?.split(':')[0]; // retirer port si présent
    const key = host + req.path;

    const file = urlMap[key];

    if (file) {
        res.sendFile(path.resolve(file));
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});