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

  let full = match[1];
  full = full.replace(/_/g, '/');

  const url = new URL('https://' + full);

  return {
    host: url.hostname,
    pathname: url.pathname || '/'
  };
}

// Construire mapping host+path -> fichier
const urlMap = {};
const routes = [];

fs.readdirSync(DIRECTORY).forEach((file) => {
  const decoded = decodeFilename(file);
  if (!decoded) return;

  const key = decoded.host + decoded.pathname;
  const filepath = path.join(DIRECTORY, file);

  urlMap[key] = filepath;
  routes.push({ host: decoded.host, pathname: decoded.pathname, key });
});

function renderLocalIndex() {
  const listItems = routes
    .sort((a, b) => a.host.localeCompare(b.host) || a.pathname.localeCompare(b.pathname))
    .map((route) => {
      const href = `/?__host=${encodeURIComponent(route.host)}${route.pathname}`;
      return `<li><a href="${href}">${route.host}${route.pathname}</a></li>`;
    })
    .join('');

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>portal-seo local preview</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; line-height: 1.45; }
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Preview local des pages</h1>
  <p>Mode sans fichier hosts : les liens ci-dessous utilisent <code>?__host=...</code>.</p>
  <ul>${listItems}</ul>
</body>
</html>`;
}

function normalizeHost(value) {
  if (!value) return '';
  let host = String(value).trim();

  host = host.replace(/^https?:\/\//i, '');
  host = host.split('/')[0];
  host = host.split(':')[0];

  return host;
}

app.use('/maintenance-icons', express.static(path.join(__dirname, 'testdi', 'fr', 'icons')));
app.get('/maintenance-banner.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(path.join(__dirname, 'maintenance-banner.js'));
});

app.use((req, res) => {
  const headerHost = normalizeHost(req.headers.host);
  const queryHost = typeof req.query.__host === 'string' ? normalizeHost(req.query.__host) : '';
  const host = queryHost || headerHost;

  if (req.path === '/' && (!host || host === 'localhost' || host === '127.0.0.1')) {
    res.status(200).send(renderLocalIndex());
    return;
  }

  const key = (host || '') + req.path;
  const file = urlMap[key];

  if (file) {
    res.sendFile(path.resolve(file));
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Loaded ${routes.length} page mappings from ${DIRECTORY}`);
});
