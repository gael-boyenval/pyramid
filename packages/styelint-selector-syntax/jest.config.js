const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  preset: 'jest-preset-stylelint',
  setupFiles: ['./jest.setup.js'],
};
