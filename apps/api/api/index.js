const { expressApp, createApp } = require('../dist/main');

module.exports = async function handler(req, res) {
  await createApp();
  return expressApp(req, res);
};
