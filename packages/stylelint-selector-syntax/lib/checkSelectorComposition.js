'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.messages = exports.ruleName = void 0;

var _stylelint = _interopRequireDefault(require('stylelint'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ruleName = 'plugin/pyramid';
exports.ruleName = ruleName;

var messages = _stylelint.default.utils.ruleMessages(ruleName, {
  invalidClassMutation: function invalidClassMutation(
    selector,
    primaryClass,
    secondaryClass,
  ) {
    return 'Invalid mutation of ".'
      .concat(secondaryClass, '" within ".')
      .concat(primaryClass, '" in "')
      .concat(selector, '"');
  },
  invalidTagMutation: function invalidTagMutation(selector, tag) {
    return 'Invalid mutation of a "'
      .concat(tag, '" in "')
      .concat(selector, '", use classes instead');
  },
  invalidClassMutationWithinTag: function invalidClassMutationWithinTag(
    selector,
    tag,
    secondaryClass,
  ) {
    return 'Invalid mutation of ".'
      .concat(secondaryClass, '" within a "')
      .concat(tag, '" tag in "')
      .concat(selector, '"');
  },
  classIsNotComposable: function classIsNotComposable(
    selector,
    primaryClassValue,
    primaryClassType,
  ) {
    return 'Expected "'
      .concat(primaryClassType, '" class ".')
      .concat(primaryClassValue, '" to be standalone in "')
      .concat(selector, '"');
  },
});

exports.messages = messages;

var checkSecondaryClass = function checkSecondaryClass(
  nextSelector,
  previousSelector,
  allowed,
  rule,
  ruleName,
  result,
) {
  if (nextSelector.blockIdentifier === previousSelector.blockIdentifier) return;

  if (
    nextSelector.blockType.name === 'unknown' &&
    previousSelector.blockType.name === 'unknown'
  ) {
    return;
  }

  if (
    !allowed('any' || 'anyClass') &&
    previousSelector.blockType.name === nextSelector.blockType.name &&
    !allowed(nextSelector.blockType.name)
  ) {
    return _stylelint.default.utils.report({
      message: messages.invalidClassMutation(
        rule.selector,
        previousSelector.value,
        nextSelector.value,
      ),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }

  if (!allowed('any' || 'anyClass') && !allowed(nextSelector.blockType.name)) {
    return _stylelint.default.utils.report({
      message: messages.invalidClassMutation(
        rule.selector,
        previousSelector.value,
        nextSelector.value,
      ),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }
};

var checkSecondaryTag = function checkSecondaryTag(
  allowed,
  rule,
  ruleName,
  result,
  tag,
) {
  if (!allowed('any')) {
    return _stylelint.default.utils.report({
      message: messages.invalidTagMutation(rule.selector, tag),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }
};

var check = function check(
  previousSelector,
  nextSelector,
  rule,
  ruleName,
  result,
) {
  if (previousSelector.type === 'tag' && nextSelector.type === 'tag') {
    return;
  }

  if (previousSelector.type === 'tag' && nextSelector.type === 'class') {
    return _stylelint.default.utils.report({
      message: messages.invalidClassMutationWithinTag(
        rule.selector,
        previousSelector.value,
        nextSelector.value,
      ),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }

  var allowed = function allowed(str) {
    return previousSelector.blockType.allowComposition.includes(str);
  };

  if (
    previousSelector.blockType.name !== 'unknown' &&
    previousSelector.blockType.allowComposition.length === 0
  ) {
    return _stylelint.default.utils.report({
      message: messages.classIsNotComposable(
        rule.selector,
        previousSelector.value,
        previousSelector.blockType.name,
      ),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }

  switch (nextSelector.type) {
    case 'class':
      checkSecondaryClass(
        nextSelector,
        previousSelector,
        allowed,
        rule,
        ruleName,
        result,
      );
      break;

    case 'tag':
      checkSecondaryTag(allowed, rule, ruleName, result, nextSelector.value);
      break;
  }
};

var checkSelectorComposition = function checkSelectorComposition(
  decomposedSelector,
  rule,
  result,
  ruleName,
) {
  if (decomposedSelector.length === 1) {
    return;
  }

  decomposedSelector
    .filter(function (part) {
      return part.type === 'tag' || part.type === 'class';
    })
    .forEach(function (part, index, array) {
      var nextSelector = array[index + 1];

      if (nextSelector) {
        check(part, nextSelector, rule, ruleName, result);
      }
    });
};

var _default = checkSelectorComposition;
exports.default = _default;
//# sourceMappingURL=checkSelectorComposition.js.map
