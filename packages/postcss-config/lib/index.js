"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeSassMagicImporter = _interopRequireDefault(require("node-sass-magic-importer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var includePaths = [];
var plugins = [require('postcss-node-sass')({
  importer: (0, _nodeSassMagicImporter.default)(),
  includePaths,
  outputStyle: 'expanded',
  indentWidth: 2,
  precision: 7
}), require('@pyramid/postcss-regroup-queries').default({
  sort: true
}), require('postcss-csso')(), require('postcss-reporter')({
  clearReportedMessages: true
})];
var _default = plugins;
exports.default = _default;
//# sourceMappingURL=index.js.map