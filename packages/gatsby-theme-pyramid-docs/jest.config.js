const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },

  setupFiles: ['./jest.setup.js'],
};
