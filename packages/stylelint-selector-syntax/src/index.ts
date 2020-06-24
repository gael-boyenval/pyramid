import stylelint from 'stylelint';
import * as _ from 'lodash';
import { Result } from 'postcss';
import getSelector from './getSelectors';
import splitSelector from './splitSelector';
import checkCase from './checkCase';

import checkSelectorComposition from './checkSelectorComposition';
import checkPropsValueAtBlockLevel from './checkPropsValueAtBlockLevel';

// types declarations
import { PyramidSelectorList, PyramidRule, PyramidSelector } from './selectors';
import { Options } from './defaultConfig';

export const ruleName = 'plugin/pyramid';

const isStringOrRegExp = (x: string | RegExp): boolean =>
  _.isString(x) || _.isRegExp(x);

const executeSelectorChecks = (
  decomposedSelector: PyramidSelector,
  rule: PyramidRule,
  result: Result,
  ruleName: string,
  options: Options,
): void => {
  /* check kebad case or other */
  checkCase(decomposedSelector, rule, result, ruleName, options);

  /* check that no class or element is not modified appropriatly */
  checkSelectorComposition(decomposedSelector, rule, result, ruleName);
};

const isBlockLevelSelector = (selector: PyramidSelectorList): boolean =>
  selector.filter(
    (elem) =>
      elem.length === 1 &&
      elem[0].bemStructure?.length === 1 &&
      elem[0].value === elem[0].blockIdentifier,
  ).length > 0;

export default stylelint.createPlugin(ruleName, (options: Options) => {
  return (root, result): void => {
    let unabled = true;

    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: {
        caseStyle: isStringOrRegExp,
        bemEntitiesDelimiters: [_.isObject],
        blockTypes: [_.isObject],
      },
    });

    if (!validOptions) {
      return;
    }

    root.walk((node) => {
      /* if we encounter a pyramid-disable comment */

      if (node.type === 'comment' && node.text === 'pyramid-disable') {
        unabled === true
          ? (unabled = false)
          : stylelint.utils.report({
              message: 'pyramid linter is allready disabled',
              node,
              result,
              ruleName,
            });
      }

      if (node.type === 'comment' && node.text === 'pyramid-enable') {
        unabled === false
          ? (unabled = true)
          : stylelint.utils.report({
              message: 'pyramid linter is allready enabled',
              node,
              result,
              ruleName,
            });
      }

      if (unabled && node.type == 'rule') {
        const selector = getSelector(node, result);
        const pyramidSelector = selector.map((selectorPart) => {
          const decomposedSelector = splitSelector(selectorPart, options);

          executeSelectorChecks(
            decomposedSelector,
            node,
            result,
            ruleName,
            options,
          );

          return decomposedSelector;
        });

        const pyramidNode: PyramidRule = {
          ...node,
          pyramidSelector,
        };

        if (isBlockLevelSelector(pyramidNode.pyramidSelector)) {
          checkPropsValueAtBlockLevel(pyramidNode);
        }
      }
    });
  };
});
