"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ruleName = void 0;

var _stylelint = _interopRequireDefault(require("stylelint"));

var _ = _interopRequireWildcard(require("lodash"));

var _getSelectors = _interopRequireDefault(require("./getSelectors"));

var _splitSelector = _interopRequireDefault(require("./splitSelector"));

var _checkCase = _interopRequireDefault(require("./checkCase"));

var _checkSelectorComposition = _interopRequireDefault(require("./checkSelectorComposition"));

var _checkPropsValueAtBlockLevel = _interopRequireDefault(require("./checkPropsValueAtBlockLevel"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ruleName = 'plugin/pyramid';
exports.ruleName = ruleName;

var isStringOrRegExp = x => _.isString(x) || _.isRegExp(x);

var executeSelectorChecks = (decomposedSelector, rule, result, ruleName, options) => {
  (0, _checkCase.default)(decomposedSelector, rule, result, ruleName, options);
  (0, _checkSelectorComposition.default)(decomposedSelector, rule, result, ruleName);
};

var isBlockLevelSelector = selector => selector.filter(elem => {
  var _elem$0$bemStructure;

  return elem.length === 1 && ((_elem$0$bemStructure = elem[0].bemStructure) === null || _elem$0$bemStructure === void 0 ? void 0 : _elem$0$bemStructure.length) === 1 && elem[0].value === elem[0].blockIdentifier;
}).length > 0;

var _default = _stylelint.default.createPlugin(ruleName, options => {
  return (root, result) => {
    var unabled = true;

    var validOptions = _stylelint.default.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: {
        caseStyle: isStringOrRegExp,
        bemEntitiesDelimiters: [_.isObject],
        blockTypes: [_.isObject]
      }
    });

    if (!validOptions) {
      return;
    }

    root.walk(node => {
      if (node.type === 'comment' && node.text === 'pyramid-disable') {
        unabled === true ? unabled = false : _stylelint.default.utils.report({
          message: 'pyramid linter is allready disabled',
          node,
          result,
          ruleName
        });
      }

      if (node.type === 'comment' && node.text === 'pyramid-enable') {
        unabled === false ? unabled = true : _stylelint.default.utils.report({
          message: 'pyramid linter is allready enabled',
          node,
          result,
          ruleName
        });
      }

      if (unabled && node.type == 'rule') {
        var selector = (0, _getSelectors.default)(node, result);
        var pyramidSelector = selector.map(selectorPart => {
          var decomposedSelector = (0, _splitSelector.default)(selectorPart, options);
          executeSelectorChecks(decomposedSelector, node, result, ruleName, options);
          return decomposedSelector;
        });

        var pyramidNode = _objectSpread(_objectSpread({}, node), {}, {
          pyramidSelector
        });

        if (isBlockLevelSelector(pyramidNode.pyramidSelector)) {
          (0, _checkPropsValueAtBlockLevel.default)(pyramidNode);
        }
      }
    });
  };
});

exports.default = _default;
//# sourceMappingURL=index.js.map