import { PyramidSelector, PyramidRule } from './selectors';
import { Result } from 'postcss';
export declare const ruleName = "plugin/pyramid";
export declare const messages: {
    invalidClassMutation: (selector: any, primaryClass: any, secondaryClass: any) => string;
    invalidTagMutation: (selector: any, tag: any) => string;
    invalidClassMutationWithinTag: (selector: any, tag: any, secondaryClass: any) => string;
    classIsNotComposable: (selector: any, primaryClassValue: any, primaryClassType: any) => string;
};
declare const checkSelectorComposition: (decomposedSelector: PyramidSelector, rule: PyramidRule, result: Result, ruleName: string) => void;
export default checkSelectorComposition;
