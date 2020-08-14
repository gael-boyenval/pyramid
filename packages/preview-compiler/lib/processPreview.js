"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcssConfig = _interopRequireDefault(require("@pyramid/postcss-config"));

var _postcss = _interopRequireDefault(require("postcss"));

var _promises = require("fs/promises");

var _path = _interopRequireDefault(require("path"));

var _fsUtils = require("./fsUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var template = (html, css, javascript, title) => "\n<!doctype html>\n<html class=\"no-js\" lang=\"\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>".concat(title, "</title>\n  <meta name=\"description\" content=\"\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style type=\"text/css\">\n    ").concat(css, "\n  </style>\n  <script>\n    ").concat(javascript, "\n  </script>\n</head>\n\n<body>\n").concat(html, "\n</body>\n\n</html>\n");

var processCSS = (from, to, code) => (0, _postcss.default)(_postcssConfig.default).process(code, {
  from,
  to
});

var handleHtml = (filename, directory) => new Promise((resolve, reject) => {
  var filePath = "".concat(directory, "/").concat(filename);
  console.log('html : ' + filePath);
  (0, _promises.readFile)(filePath, 'utf8').then(content => resolve(content)).catch(err => reject(err));
});

var handleSCSS = (filename, directory) => new Promise((resolve, reject) => {
  var filePath = "".concat(directory, "/").concat(filename);
  console.log('scss : ' + filePath);
  (0, _promises.readFile)(filePath, 'utf8').then(content => processCSS(filePath, filePath, content).then(result => resolve(result.css)).catch(err => reject(err)));
});

var handleJS = (filename, directory) => new Promise(resolve => {
  var filePath = "".concat(directory, "/").concat(filename);
  (0, _promises.readFile)(filePath, 'utf8').then(content => resolve(content)).catch(err => resolve(''));
});

var handleFiles = (files, directory) => {
  var htmlFile = files.find(file => file.endsWith('.html'));
  var scssFile = files.find(file => file.endsWith('.scss'));
  var jsFile = files.find(file => file.endsWith('.js'));
  console.log(htmlFile);
  console.log(files);
  return Promise.all([handleHtml(htmlFile, directory), handleSCSS(scssFile, directory), handleJS(jsFile, directory)]);
};

var getRelatedFiles = function () {
  var _ref = _asyncToGenerator(function* (filePath) {
    var files = yield (0, _promises.readdir)(_path.default.dirname(filePath));

    var previewName = _path.default.basename(filePath).replace(_path.default.extname(filePath), '');

    var relatedFiles = files.filter(file => file.replace(_path.default.extname(file), '') === previewName);
    return handleFiles(relatedFiles, _path.default.dirname(filePath)).then((_ref2) => {
      var [html, css, js] = _ref2;
      return Promise.resolve(template(html, css, js, previewName));
    }).catch(err => Promise.reject(err));
  });

  return function getRelatedFiles(_x) {
    return _ref.apply(this, arguments);
  };
}();

var processPreview = (parsedPath, filePath) => {
  console.log('-----------------------------');
  console.log(parsedPath);
  console.log('-----------------------------');
  return (0, _fsUtils.createFullPath)(parsedPath.writeDir).then(() => getRelatedFiles(filePath)).then(content => {
    return (0, _promises.writeFile)("".concat(parsedPath.writeDir, "/").concat(parsedPath.previewName, ".html"), content);
  }).catch(err => {
    throw console.error(err);
  });
};

var _default = processPreview;
exports.default = _default;
//# sourceMappingURL=processPreview.js.map