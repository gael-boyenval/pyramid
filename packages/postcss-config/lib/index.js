'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _stylelintConfig = _interopRequireDefault(
  require('@pyramid/stylelint-config'),
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var includePaths = [];
var plugins = [
  require('stylelint')(_stylelintConfig.default),
  require('postcss-node-sass')({
    includePaths: includePaths,
    outputStyle: 'expanded',
    indentWidth: 2,
    precision: 7,
  }),
  require('@pyramid/postcss-regroup-queries')({
    sort: true,
  }),
  require('postcss-csso')(),
  require('postcss-reporter')({
    clearReportedMessages: true,
  }),
];
var _default = plugins;
exports.default = _default;
//# sourceMappingURL=index.js.map
