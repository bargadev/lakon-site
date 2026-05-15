const fs = require('fs');
const path = require('path');

let lakonVersion = 'unknown';
try {
  const pkgPath = path.join(__dirname, '..', 'lakon-lib', 'package.json');
  lakonVersion = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version;
} catch {
  // sibling lakon-lib not present (e.g. CI clone of just this repo) — fall back
}

/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
