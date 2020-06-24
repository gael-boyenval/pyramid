'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _compiler = _interopRequireDefault(
  require('@pyramid/compiler/lib/compiler'),
);

var _postcss = _interopRequireDefault(require('postcss'));

var _promises = require('fs/promises');

var _path = _interopRequireDefault(require('path'));

var _fsUtils = require('./fsUtils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

var template = function template(html, css, javascript, title) {
  return '\n<!doctype html>\n<html class="no-js" lang="">\n\n<head>\n  <meta charset="utf-8">\n  <title>'
    .concat(
      title,
      '</title>\n  <meta name="description" content="">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <style type="text/css">\n    ',
    )
    .concat(css, '\n  </style>\n  <script>\n    ')
    .concat(javascript, '\n  </script>\n</head>\n\n<body>\n')
    .concat(html, '\n</body>\n\n</html>\n');
};

var processCSS = function processCSS(from, to, code) {
  return (0, _postcss.default)(_compiler.default).process(code, {
    from: from,
    to: to,
  });
};

var handleHtml = function handleHtml(filename, directory) {
  return new Promise(function (resolve, reject) {
    var filePath = ''.concat(directory, '/').concat(filename);
    (0, _promises.readFile)(filePath, 'utf8')
      .then(function (content) {
        return resolve(content);
      })
      .catch(function (err) {
        return reject(err);
      });
  });
};

var handleSCSS = function handleSCSS(filename, directory) {
  return new Promise(function (resolve, reject) {
    var filePath = ''.concat(directory, '/').concat(filename);
    (0, _promises.readFile)(filePath, 'utf8').then(function (content) {
      return processCSS(filePath, filePath, content)
        .then(function (result) {
          return resolve(result.css);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  });
};

var handleJS = function handleJS(filename, directory) {
  return new Promise(function (resolve, reject) {
    var filePath = ''.concat(directory, '/').concat(filename);
    (0, _promises.readFile)(filePath, 'utf8')
      .then(function (content) {
        return resolve(content);
      })
      .catch(function (err) {
        return reject(err);
      });
  });
};

var handleFiles = function handleFiles(files, directory) {
  var htmlFile = files.find(function (file) {
    return file.endsWith('.html');
  });
  var scssFile = files.find(function (file) {
    return file.endsWith('.scss');
  });
  var jsFile = files.find(function (file) {
    return file.endsWith('.js');
  });
  return Promise.all([
    handleHtml(htmlFile, directory),
    handleSCSS(scssFile, directory),
    handleJS(jsFile, directory),
  ]);
};

var getRelatedFiles = (function () {
  var _ref = _asyncToGenerator(
    regeneratorRuntime.mark(function _callee(filePath) {
      var files, previewName, relatedFiles;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return (0, _promises.readdir)(_path.default.dirname(filePath));

            case 2:
              files = _context.sent;
              previewName = _path.default
                .basename(filePath)
                .replace(_path.default.extname(filePath), '');
              relatedFiles = files.filter(function (file) {
                return (
                  file.replace(_path.default.extname(file), '') === previewName
                );
              });
              return _context.abrupt(
                'return',
                handleFiles(relatedFiles, _path.default.dirname(filePath))
                  .then(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 3),
                      html = _ref3[0],
                      css = _ref3[1],
                      js = _ref3[2];

                    return Promise.resolve(
                      template(html, css, js, previewName),
                    );
                  })
                  .catch(function (err) {
                    return Promise.reject(err);
                  }),
              );

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }),
  );

  return function getRelatedFiles(_x) {
    return _ref.apply(this, arguments);
  };
})();

var processPreview = function processPreview(parsedPath, filePath) {
  return (0, _fsUtils.createFullPath)(parsedPath.writeDir)
    .then(function () {
      return getRelatedFiles(filePath);
    })
    .then(function (content) {
      return (0,
      _promises.writeFile)(''.concat(parsedPath.writeDir, '/').concat(parsedPath.previewName, '.html'), content);
    })
    .catch(function (err) {
      throw console.error(err);
    });
};

var _default = processPreview;
exports.default = _default;
//# sourceMappingURL=processPreview.js.map
