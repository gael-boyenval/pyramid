"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPatternPositionArray(string, pattern) {
  var pos = null;
  var arr = [];

  while (pos !== -1) {
    pos = string.indexOf(pattern, pos + 1);

    if (pos !== -1) {
      arr.push(pos);
    }
  }

  return arr;
}

function matchBlockType(options, prefix) {
  return options.blockTypes.find(blockType => {
    if (typeof blockType.prefix === 'string') {
      return blockType.prefix === prefix;
    }

    if (_lodash.default.isArray(blockType.prefix)) {
      return blockType.prefix.includes(prefix);
    }
  });
}

function stringSplitterIndexs() {
  return [].concat(...arguments).sort((a, b) => a - b);
}

function splitBem(string, options) {
  var delimitersToSplit = [];
  var arr = [];
  Object.keys(options.bemEntitiesDelimiters).forEach(key => {
    delimitersToSplit.push(getPatternPositionArray(string, options.bemEntitiesDelimiters[key]));
  });
  var splitter = stringSplitterIndexs(...delimitersToSplit, 0, string.length);
  splitter.forEach((stringIndex, i) => {
    var part = string.substring(stringIndex, splitter[i + 1]);
    var partFound = false;
    Object.keys(options.bemEntitiesDelimiters).forEach(key => {
      if (part.startsWith(options.bemEntitiesDelimiters[key])) {
        arr.push({
          partType: key,
          string: part.replace(options.bemEntitiesDelimiters[key], '')
        });
        partFound = true;
      }
    });

    if (part && !partFound) {
      arr.push({
        partType: 'block',
        string: part
      });
    }
  });
  return arr;
}

var extractPrefix = (selector, options) => {
  var result = null;
  options.blockTypes.forEach(type => {
    if (typeof type.prefix === 'string' && selector.startsWith(type.prefix)) {
      result = type.prefix;
    }

    if (Array.isArray(type.prefix)) {
      type.prefix.forEach(typePrefix => {
        if (selector.startsWith(typePrefix)) {
          result = typePrefix;
        }
      });
    }
  });
  return result;
};

var splitSelector = (selector, options) => {
  var prefix = null;
  var pyramidSelector = selector.map(part => {
    var newPart = _objectSpread({}, part);

    if (part.type === 'class') {
      prefix = extractPrefix(newPart.value, options);
      newPart.blockIdentifier = splitBem(newPart.value, options)[0].string;
      newPart.blockType = matchBlockType(options, prefix) || {
        name: 'unknown'
      };
      newPart.bemStructure = splitBem(newPart.value.replace(prefix, ''), options);

      if (prefix && newPart.bemStructure) {
        newPart.bemStructure.push({
          partType: 'prefix',
          string: prefix
        });
      }
    }

    return newPart;
  });
  return pyramidSelector;
};

var _default = splitSelector;
exports.default = _default;
//# sourceMappingURL=splitSelector.js.map