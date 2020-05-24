import { PyramidSelector, PyramidRule } from './selectors';
import { Options } from './options';
import { Result } from 'postcss';
export declare const ruleName = "plugin/pyramid";
export declare const messages: {
    expectedSyntax: (substring: any, selector: any, caseStyle: any) => string;
};
declare const checkCase: (decomposedSelector: PyramidSelector, rule: PyramidRule, result: Result, ruleName: string, options: Options) => void;
export default checkCase;
