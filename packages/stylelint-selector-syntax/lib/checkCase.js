"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.messages = exports.ruleName = void 0;

var _stylelint = _interopRequireDefault(require("stylelint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ruleName = 'plugin/pyramid';
exports.ruleName = ruleName;

var messages = _stylelint.default.utils.ruleMessages(ruleName, {
  expectedSyntax: (substring, selector, caseStyle) => "Expected \"".concat(substring, "\" in \".").concat(selector, "\" to be \"").concat(caseStyle, "\"")
});

exports.messages = messages;
var cases = {
  kebabCase: /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
  camelCase: /^[a-z][a-zA-Z0-9]+$/,
  snakeCase: /^[a-z]+(_[a-z]+)*$/,
  pascalCase: /^[A-Z][a-zA-Z0-9]+$/
};

var match = (part, configCase) => {
  if (typeof configCase === 'string') {
    return cases[configCase].test(part);
  }

  if (configCase instanceof RegExp) {
    return configCase.test(part);
  }

  return false;
};

var checkCase = (decomposedSelector, rule, result, ruleName, options) => {
  decomposedSelector.forEach(selectorPart => {
    if (selectorPart.type === 'class') {
      selectorPart.bemStructure.forEach(classPart => {
        var isValidCase = classPart.string.includes('#') || classPart.partType === 'prefix' ? true : match(classPart.string, options.caseStyle);

        if (!isValidCase) {
          _stylelint.default.utils.report({
            message: messages.expectedSyntax(classPart.string, selectorPart.value, options.caseStyle),
            node: rule,
            result,
            ruleName
          });
        }
      });
    }
  });
};

var _default = checkCase;
exports.default = _default;
//# sourceMappingURL=checkCase.js.map