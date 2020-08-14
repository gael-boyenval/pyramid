let postcss = require('postcss');
const sass = require('postcss-node-sass');
const plugin = require('./lib/index').default;

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
