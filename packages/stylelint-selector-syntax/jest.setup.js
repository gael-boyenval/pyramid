const getTestRule = require('jest-preset-stylelint/getTestRule');
const { options } = require('./src/defaultConfig');

global.testRule = getTestRule({ plugins: ['./src/index.ts'] });

global.baseconfig = options;
global.baseConfigAssign = (variation) => Object.assign({}, options, variation);
