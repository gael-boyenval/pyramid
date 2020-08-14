"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePath = exports.createFullPath = exports.createWriteDir = void 0;

var _path = _interopRequireDefault(require("path"));

var _promises = require("fs/promises");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createWriteDir = (config, filepath) => {
  var removedLastPreview = _path.default.dirname(filepath).replace(/_/gi, '').split(_path.default.sep).filter(i => i !== 'previews').join(_path.default.sep);

  var distPath = removedLastPreview.replace(config.srcPath, config.distPath).replace(config.srcPath, config.distPath).toLowerCase();
  return _path.default.resolve(config.basePath, distPath);
};

exports.createWriteDir = createWriteDir;

var createFullPath = dir => (0, _promises.mkdir)(dir, {
  recursive: true
});

exports.createFullPath = createFullPath;

var parsePath = (config, filepath) => ({
  previewName: _path.default.basename(filepath).replace(_path.default.extname(filepath), ''),
  dirname: _path.default.resolve(config.basePath, _path.default.dirname(filepath)),
  writeDir: createWriteDir(config, filepath),
  ext: _path.default.extname(filepath)
});

exports.parsePath = parsePath;
//# sourceMappingURL=fsUtils.js.map