const fs = require('fs');
const path = require('path');
const https = require('https');

function readSiblingVersion() {
  try {
    const pkgPath = path.join(__dirname, '..', 'lakon-lib', 'package.json');
    return JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version;
  } catch {
    return null;
  }
}

function fetchNpmLatest(timeoutMs = 5000) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (v) => { if (!settled) { settled = true; resolve(v); } };
    try {
      const req = https.get(
        'https://registry.npmjs.org/@bargadev/lakon/latest',
        { timeout: timeoutMs, headers: { accept: 'application/json' } },
        (res) => {
          if (res.statusCode !== 200) { res.resume(); return finish(null); }
          let body = '';
          res.on('data', (c) => (body += c));
          res.on('end', () => {
            try { finish(JSON.parse(body).version || null); } catch { finish(null); }
          });
        }
      );
      req.on('error', () => finish(null));
      req.on('timeout', () => { try { req.destroy(); } catch {} finish(null); });
    } catch {
      finish(null);
    }
  });
}

module.exports = async () => {
  let lakonVersion = readSiblingVersion();
  if (!lakonVersion) lakonVersion = await fetchNpmLatest();
  if (!lakonVersion) lakonVersion = 'unknown';

  /** @type {import('next').NextConfig} */
  return {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    trailingSlash: true,
    basePath: '/lakon-site',
    assetPrefix: '/lakon-site',
    images: { unoptimized: true },
    productionBrowserSourceMaps: false,
    typescript: { ignoreBuildErrors: false },
    eslint: { ignoreDuringBuilds: false },
    env: {
      NEXT_PUBLIC_LAKON_VERSION: lakonVersion,
    },
  };
};
