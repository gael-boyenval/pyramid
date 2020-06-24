import { SelectorDef } from './selectors';
import { Rule, Result } from 'postcss';
declare const selector: (rule: Rule, result: Result) => SelectorDef;
export default selector;
