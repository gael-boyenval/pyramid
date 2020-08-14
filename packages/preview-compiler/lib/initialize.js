#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clear = _interopRequireDefault(require("clear"));

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _clear.default)();
console.log(_chalk.default.yellow(_figlet.default.textSync('Pyramid', {
  horizontalLayout: 'full'
})));
var caller = process.cwd();
var config = {
  subPath: null,
  basePath: caller,
  srcPath: 'src/lib',
  distPath: 'previews'
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=initialize.js.map