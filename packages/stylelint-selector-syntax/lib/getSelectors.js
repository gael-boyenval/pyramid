'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _postcssResolveNestedSelector = _interopRequireDefault(
  require('postcss-resolve-nested-selector'),
);

var _postcssSelectorParser = _interopRequireDefault(
  require('postcss-selector-parser'),
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var selector = function selector(rule, result) {
  var selector = rule.selector;
  var selectorDef = [];
  var resolvedSelector = (0, _postcssResolveNestedSelector.default)(
    selector,
    rule,
  );
  resolvedSelector.forEach(function (sel) {
    try {
      (0, _postcssSelectorParser.default)(function (sel) {
        sel.each(function (selectorNode) {
          var currentSelector = [];
          selectorNode.walk(function (s) {
            currentSelector.push({
              value: s.value,
              type: s.type,
            });
          });
          selectorDef.push(currentSelector);
        });
      }).process(sel);
    } catch (e) {
      result.warn('Cannot parse selector', {});
    }
  });
  return selectorDef;
};

var _default = selector;
exports.default = _default;
//# sourceMappingURL=getSelectors.js.map
