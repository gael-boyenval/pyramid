'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _initialize = _interopRequireDefault(require('./lib/initialize'));

var _build = _interopRequireDefault(require('./lib/build'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = (0, _build.default)(_initialize.default);

exports.default = _default;
//# sourceMappingURL=buildCommand.js.map
