'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.parsePath = exports.createFullPath = exports.createWriteDir = void 0;

var _path = _interopRequireDefault(require('path'));

var _promises = require('fs/promises');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createWriteDir = function createWriteDir(config, filepath) {
  var removedLastPreview = _path.default
    .dirname(filepath)
    .split('/')
    .filter(function (i) {
      return i !== 'previews';
    })
    .join('/');

  var distPath = removedLastPreview
    .replace(config.srcPath, config.distPath)
    .replace(config.srcPath, config.distPath)
    .toLowerCase();
  return _path.default.resolve(config.basePath, distPath);
};

exports.createWriteDir = createWriteDir;

var createFullPath = function createFullPath(dir) {
  return (0, _promises.mkdir)(dir, {
    recursive: true,
  });
};

exports.createFullPath = createFullPath;

var parsePath = function parsePath(config, filepath) {
  return {
    previewName: _path.default
      .basename(filepath)
      .replace('.preview.', '.')
      .replace(_path.default.extname(filepath), ''),
    dirname: _path.default.resolve(
      config.basePath,
      _path.default.dirname(filepath),
    ),
    writeDir: createWriteDir(config, filepath),
    ext: _path.default.extname(filepath),
  };
};

exports.parsePath = parsePath;
//# sourceMappingURL=fsUtils.js.map
