import stylelint from 'stylelint';
// types declarations
import { PyramidSelector, PyramidRule } from './selectors';
import { Options } from './defaultConfig';
import { Result } from 'postcss';

export const ruleName = 'plugin/pyramid';

export const messages = stylelint.utils.ruleMessages(ruleName, {
  expectedSyntax: (substring, selector, caseStyle) =>
    `Expected "${substring}" in ".${selector}" to be "${caseStyle}"`,
});

const cases: { [index: string]: RegExp } = {
  kebabCase: /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
  camelCase: /^[a-z][a-zA-Z0-9]+$/,
  snakeCase: /^[a-z]+(_[a-z]+)*$/,
  pascalCase: /^[A-Z][a-zA-Z0-9]+$/,
};

const match = (part: string, configCase: string | RegExp): boolean => {
  if (typeof configCase === 'string') {
    return cases[configCase].test(part);
  }

  if (configCase instanceof RegExp) {
    return configCase.test(part);
  }

  return false;
};

const checkCase = (
  decomposedSelector: PyramidSelector,
  rule: PyramidRule,
  result: Result,
  ruleName: string,
  options: Options,
): void => {
  decomposedSelector.forEach((selectorPart) => {
    if (selectorPart.type === 'class') {
      selectorPart.bemStructure.forEach((classPart) => {
        // ignore # for variables in scss files
        const isValidCase =
          classPart.string.includes('#') || classPart.partType === 'prefix'
            ? true
            : match(classPart.string, options.caseStyle);

        if (!isValidCase) {
          stylelint.utils.report({
            message: messages.expectedSyntax(
              classPart.string,
              selectorPart.value,
              options.caseStyle,
            ),
            node: rule,
            result,
            ruleName,
          });
        }
      });
    }
  });
};

export default checkCase;
