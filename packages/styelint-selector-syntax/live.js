const postcss = require('postcss');
const { options } = require('./dist/defaultConfig');

const code = `
.toto__tutu {

}
`;

const conf = {
  plugins: ['./dist/index.js'],
  rules: {
    'plugin/pyramid': options,
  },
};

postcss([
  require('stylelint')(conf),
  require('postcss-reporter')({ clearReportedMessages: true }),
])
  .process(code, { from: 'toto.less' })
  .then(() => {})
  .catch((err) => console.error(err.stack));
