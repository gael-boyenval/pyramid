import stylelint from 'stylelint';
import { PyramidSelector, PyramidSelectorPart, PyramidRule } from './selectors';
import { Result } from 'postcss';

/*
  REPORTS MESSAGES
*/

export const ruleName = 'plugin/pyramid';

export const messages = stylelint.utils.ruleMessages(ruleName, {
  invalidClassMutation: (selector, primaryClass, secondaryClass) =>
    `Invalid mutation of ".${secondaryClass}" within ".${primaryClass}" in "${selector}"`,
  invalidTagMutation: (selector, tag) =>
    `Invalid mutation of a "${tag}" in "${selector}", use classes instead`,
  invalidClassMutationWithinTag: (selector, tag, secondaryClass) =>
    `Invalid mutation of ".${secondaryClass}" within a "${tag}" tag in "${selector}"`,
  classIsNotComposable: (selector, primaryClassValue, primaryClassType) =>
    `Expected "${primaryClassType}" class ".${primaryClassValue}" to be standalone in "${selector}"`,
});

/*
  CHECK UPON SECONDARY SELECTOR ELEMENTS
*/

const checkSecondaryClass = (
  nextSelector: PyramidSelectorPart,
  previousSelector: PyramidSelectorPart,
  allowed: Allowed,
  rule: PyramidRule,
  ruleName: string,
  result: Result,
): void => {
  if (nextSelector.blockIdentifier === previousSelector.blockIdentifier) return;

  // if both classes are without identifier
  if (
    nextSelector.blockType.name === 'unknown' &&
    previousSelector.blockType.name === 'unknown'
  ) {
    return;
  }

  /* same block type, diferent block identifer */
  if (
    !allowed('any' || 'anyClass') &&
    previousSelector.blockType.name === nextSelector.blockType.name &&
    !allowed(nextSelector.blockType.name)
  ) {
    return stylelint.utils.report({
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

  /* diferent block type, diferent block identifer */
  if (!allowed('any' || 'anyClass') && !allowed(nextSelector.blockType.name)) {
    return stylelint.utils.report({
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

type Allowed = (str: string) => boolean;

const checkSecondaryTag = (
  allowed: Allowed,
  rule: PyramidRule,
  ruleName: string,
  result: Result,
  tag: string,
): void => {
  if (!allowed('any')) {
    return stylelint.utils.report({
      message: messages.invalidTagMutation(rule.selector, tag),
      node: rule,
      result: result,
      ruleName: ruleName,
    });
  }
};

const check = (
  previousSelector: PyramidSelectorPart,
  nextSelector: PyramidSelectorPart,
  rule: PyramidRule,
  ruleName: string,
  result: Result,
): void | Function => {
  if (previousSelector.type === 'tag' && nextSelector.type === 'tag') {
    return;
  }

  // disalow tags modifying classes
  if (previousSelector.type === 'tag' && nextSelector.type === 'class') {
    return stylelint.utils.report({
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

  const allowed: Allowed = (str) =>
    previousSelector.blockType.allowComposition.includes(str);

  // if the previousSelector block type is not unknown and as no allowed composition, we error
  if (
    previousSelector.blockType.name !== 'unknown' &&
    previousSelector.blockType.allowComposition.length === 0
  ) {
    return stylelint.utils.report({
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

/*
  MAIN CHECKS
*/

const checkSelectorComposition = (
  decomposedSelector: PyramidSelector,
  rule: PyramidRule,
  result: Result,
  ruleName: string,
): void => {
  // if the selector is composed of only one element,
  // we do not check for composition errors
  if (decomposedSelector.length === 1) {
    return;
  }

  decomposedSelector
    .filter((part) => part.type === 'tag' || part.type === 'class')
    .forEach((part, index, array) => {
      const nextSelector = array[index + 1];
      if (nextSelector) {
        check(part, nextSelector, rule, ruleName, result);
      }
    });
};

export default checkSelectorComposition;
