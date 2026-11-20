/**
 * Lightweight HTTP Server for VayuMitra (वायुमित्र)
 * Automatically loads .env configuration (MAP_API_KEY / GOOGLE_MAPS_API_KEY)
 * Exposes dynamic /config.js and /api/config endpoints.
 * Zero external dependencies. Runs with Node or agy-node.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const ENV_FILE = path.join(__dirname, '.env');

// Parse .env file if present
function loadEnv() {
  if (!fs.existsSync(ENV_FILE)) {
    console.log('ℹ️  No .env file found; using process.env defaults.');
    return;
  }

  try {
    const envRaw = fs.readFileSync(ENV_FILE, 'utf8');
    const lines = envRaw.split(/\r?\n/);
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;

      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        // Remove surrounding single or double quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      } else if (trimmed.startsWith('AIzaSy')) {
        // Raw Google Maps API key placed directly in .env
        if (!process.env.MAP_API_KEY) process.env.MAP_API_KEY = trimmed;
        if (!process.env.GOOGLE_MAPS_API_KEY) process.env.GOOGLE_MAPS_API_KEY = trimmed;
      }
    });

    // Ensure reciprocal alias
    if (process.env.MAP_API_KEY && !process.env.GOOGLE_MAPS_API_KEY) {
      process.env.GOOGLE_MAPS_API_KEY = process.env.MAP_API_KEY;
    } else if (process.env.GOOGLE_MAPS_API_KEY && !process.env.MAP_API_KEY) {
      process.env.MAP_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    }

    const keyMasked = process.env.MAP_API_KEY
      ? `${process.env.MAP_API_KEY.slice(0, 8)}...${process.env.MAP_API_KEY.slice(-4)}`
      : 'NONE';
    console.log(`✅ Loaded .env successfully. MAP_API_KEY: ${keyMasked}`);
  } catch (err) {
    console.error('⚠️  Failed to parse .env:', err.message);
  }
}

loadEnv();

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Normalize URL path
  let safePath = req.url.split('?')[0];

  // Dynamic /config.js endpoint for client-side environment variable injection
  if (safePath === '/config.js') {
    const configData = {
      MAP_API_KEY: process.env.MAP_API_KEY || '',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || process.env.MAP_API_KEY || '',
      APP_ENV: process.env.NODE_ENV || 'development'
    };
    const body = `// Auto-generated runtime environment config\nwindow.VAYUMITRA_CONFIG = ${JSON.stringify(configData, null, 2)};\n`;

    res.writeHead(200, {
      'Content-Type': 'application/javascript; charset=UTF-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(body);
    return;
  }

  // Dynamic /api/config JSON endpoint
  if (safePath === '/api/config') {
    const configData = {
      MAP_API_KEY: process.env.MAP_API_KEY || '',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || process.env.MAP_API_KEY || '',
      status: 'ok'
    };

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(configData));
    return;
  }

  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, safePath);

  // Security check to ensure safe path inside PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`=======================================================`);
  console.log(`  🌿 VayuMitra (वायुमित्र) Web App is running!`);
  console.log(`  🔗 Local URL: http://127.0.0.1:${PORT}`);
  console.log(`  🔑 Map API Key Configured: ${process.env.MAP_API_KEY ? 'YES (Loaded)' : 'NO'}`);
  console.log(`  ⚙️  Config Endpoints: /config.js & /api/config`);
  console.log(`  Press Ctrl+C to terminate`);
  console.log(`=======================================================`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down VayuMitra server cleanly...');
  server.close(() => process.exit(0));
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
