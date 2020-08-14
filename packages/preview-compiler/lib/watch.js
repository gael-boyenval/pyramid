"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _liveServer = _interopRequireDefault(require("live-server"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _processPreview = _interopRequireDefault(require("./processPreview"));

var _fsUtils = require("./fsUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var watch = opts => {
  var config = opts;
  (0, _fsUtils.createFullPath)("".concat(config.basePath, "/").concat(config.distPath));

  _chokidar.default.watch("".concat(config.basePath, "/").concat(config.srcPath, "/**/_previews/*")).on('change', filePath => {
    var parsedPath = (0, _fsUtils.parsePath)(config, filePath);
    (0, _processPreview.default)(parsedPath, filePath);
  });

  var params = {
    port: 8181,
    host: '0.0.0.0',
    root: "".concat(config.basePath, "/").concat(config.distPath),
    wait: 100,
    logLevel: 2
  };

  _liveServer.default.start(params);
};

var _default = watch;
exports.default = _default;
//# sourceMappingURL=watch.js.map