const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Sanitize path against directory traversal
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') {
      safePath = '/index.html';
    }

    let filePath = path.join(PUBLIC_DIR, safePath);

    // Prevent access outside PUBLIC_DIR
    if (!filePath.startsWith(PUBLIC_DIR)) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    fs.stat(filePath, (err, stats) => {
      // If file not found or is a directory, fallback to index.html (SPA routing)
      if (err || !stats.isFile()) {
        filePath = path.join(PUBLIC_DIR, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          console.error(`Error reading ${filePath}:`, readErr);
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(`500 - Internal Server Error: ${readErr.message}`);
          return;
        }

        const isAsset = safePath.startsWith('/assets/');
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': isAsset ? 'public, max-age=31536000, immutable' : 'no-cache'
        });
        res.end(content);
      });
    });
  } catch (error) {
    console.error('Request handling error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 - Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Public directory: ${PUBLIC_DIR}`);
});
