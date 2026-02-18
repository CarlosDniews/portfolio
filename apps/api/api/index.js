const { expressApp, createApp } = require('../dist/main');

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
];

function isOriginAllowed(origin) {
  if (!origin) return true;
  if (origin.endsWith('.vercel.app')) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || '';

  if (isOriginAllowed(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, trpc-accept, x-trpc-source',
    );
  }

  // Respond immediately to preflight without booting NestJS
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  await createApp();
  return expressApp(req, res);
};
