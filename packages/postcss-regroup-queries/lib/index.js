"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var postcss = _interopRequireWildcard(require("postcss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var startPacking = false;
var queries = {};
var queryLists = [];

var parseQueryList = function parseQueryList(queryList) {
  var queries = [];
  postcss.list.comma(queryList).forEach(function (query) {
    var expressions = {};
    postcss.list.space(query).forEach(function (expression) {
      var newExpression = expression.toLowerCase();

      if (newExpression === 'and') {
        return;
      }

      if (/^\w+$/.test(newExpression)) {
        expressions[newExpression] = true;
        return;
      }

      newExpression = postcss.list.split(newExpression.replace(/^\(|\)$/g, ''), [':']);

      var _newExpression = newExpression,
          _newExpression2 = _slicedToArray(_newExpression, 2),
          feature = _newExpression2[0],
          value = _newExpression2[1];

      if (!expressions[feature]) {
        expressions[feature] = [];
      }

      expressions[feature].push(value);
    });
    queries.push(expressions);
  });
  return queries;
};

var inspectLength = function inspectLength(length) {
  if (length === '0') {
    return 0;
  }

  var matches = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length);

  if (!matches) {
    return Number.MAX_VALUE;
  }

  matches.shift();

  var _matches = _slicedToArray(matches, 2),
      num = _matches[0],
      unit = _matches[1];

  var newNum = parseFloat(num);

  switch (unit) {
    case 'ch':
      newNum = newNum * 8.8984375;
      break;

    case 'em':
    case 'rem':
      newNum = newNum * 16;
      break;

    case 'ex':
      newNum = newNum * 8.296875;
      break;
  }

  return newNum;
};

var pickMinimumMinWidth = function pickMinimumMinWidth(expressions) {
  var minWidths = [];
  expressions.forEach(function (feature) {
    var minWidth = feature['min-width'];

    if (!minWidth || feature.not || feature.print) {
      minWidth = [null];
    }

    minWidths.push(minWidth.map(inspectLength).sort(function (a, b) {
      return b - a;
    })[0]);
  });
  return minWidths.sort(function (a, b) {
    return a - b;
  })[0];
};

var sortQueryLists = function sortQueryLists(queryLists, sort) {
  var mapQueryLists = [];

  if (!sort) {
    return queryLists;
  }

  if (typeof sort === 'function') {
    return queryLists.sort(sort);
  }

  queryLists.forEach(function (queryList) {
    mapQueryLists.push(parseQueryList(queryList));
  });
  return mapQueryLists.map(function (e, i) {
    return {
      index: i,
      value: pickMinimumMinWidth(e)
    };
  }).sort(function (a, b) {
    return a.value - b.value;
  }).map(function (e) {
    return queryLists[e.index];
  });
};

function addToAtRules(node) {
  if (node.parent.parent && node.parent.parent.type !== 'root') {
    console.log('node.parent.parent && node.parent.parent.type !== root');
    return;
  }

  if (node.parent.type !== 'root') {
    var newAtRule = postcss.atRule({
      name: node.parent.name,
      params: node.parent.params
    });
    node.each(function (rule) {
      newAtRule.append(rule);
    });
    node.remove();
    node.removeAll();
    node.append(newAtRule);
  }

  var queryList = node.params;
  var past = queries[queryList];

  if (_typeof(past) === 'object') {
    node.each(function (rule) {
      past.append(rule.clone());
    });
  } else {
    queries[queryList] = node.clone();
    queryLists.push(queryList);
  }

  node.remove();
}

var plugin = postcss.plugin('postcss-pyramid', function (options) {
  var opts = _objectSpread({
    sort: false
  }, options);

  return function (root, result) {
    root.each(function (node) {
      if (node.type === 'comment' && node.text === 'pyramid-block:start') {
        startPacking = true;
        node.remove();
      }

      if (node.type === 'comment' && node.text === 'pyramid-block:end') {
        startPacking = false;
      }

      if (node.type === 'atrule' && node.name === 'media' && startPacking === true) {
        addToAtRules(node);
      }

      if (node.type === 'comment' && node.text === 'pyramid-block:end' && startPacking === false) {
        sortQueryLists(queryLists, opts.sort).forEach(function (queryList) {
          node.before(queries[queryList]);
        });
        node.remove();
        queries = {};
        queryLists = [];
      }
    });
  };
});
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=index.js.map