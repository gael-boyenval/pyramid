let postcss = require('postcss');
let plugin = require('./src/index');
const sass = require('postcss-node-sass');

async function run(input, output, pluginOpts, testOpts = 'default') {
  let config = { plugins: [plugin(pluginOpts)] };

  if (testOpts === 'withScss') {
    config = {
      syntax: 'postcss-scss',
      plugins: [sass(), plugin(pluginOpts)],
    };
  }

  let result = await postcss(config).process(input, {
    from: undefined,
  });

  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

global.run = run;
