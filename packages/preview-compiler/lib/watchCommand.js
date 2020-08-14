#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _watch = _interopRequireDefault(require("./watch"));

var _initialize = _interopRequireDefault(require("./initialize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _watch.default)(_initialize.default);

exports.default = _default;
//# sourceMappingURL=watchCommand.js.map