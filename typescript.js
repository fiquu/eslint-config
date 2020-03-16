const { join } = require('path');

module.exports = {
  extends: join(__dirname, 'index.js'),
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off', // Wont recognize TS features
    'node/no-missing-import': 'off' // Wont recognize .ts
  }
}
