// const stylelint = require("stylelint");
import resolveNestedSelector from 'postcss-resolve-nested-selector';
import parseSelector from 'postcss-selector-parser';
import { SelectorDef, Selector, ResolvedSelector } from './selectors';
import { Rule, Result } from 'postcss';

const selector = (rule: Rule, result: Result): SelectorDef => {
  const selector = rule.selector;
  const selectorDef: SelectorDef = [];
  const resolvedSelector: ResolvedSelector = resolveNestedSelector(
    selector,
    rule,
  );

  resolvedSelector.forEach((sel) => {
    try {
      parseSelector((sel: parseSelector.Root): void => {
        sel.each((selectorNode: parseSelector.Selector) => {
          const currentSelector: Selector = [];

          selectorNode.walk((s) => {
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

export default selector;
