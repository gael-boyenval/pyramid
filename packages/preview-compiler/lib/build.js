"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glob = _interopRequireDefault(require("glob"));

var _processPreview = _interopRequireDefault(require("./processPreview"));

var _fsUtils = require("./fsUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var build = opts => {
  var config = opts;
  (0, _fsUtils.createFullPath)("".concat(config.basePath, "/").concat(config.distPath));

  _glob.default.sync("".concat(config.basePath, "/").concat(config.srcPath, "/**/_previews/*.html")).forEach(filePath => {
    var parsedPath = (0, _fsUtils.parsePath)(config, filePath);
    console.log(parsedPath);
    (0, _processPreview.default)(parsedPath, filePath);
  });
};

var _default = build;
exports.default = _default;
//# sourceMappingURL=build.js.map