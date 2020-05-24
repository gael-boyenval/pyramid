import { Selector, PyramidSelector } from './selectors';
import { Options } from './options';
declare const splitSelector: (selector: Selector, options: Options) => PyramidSelector;
export default splitSelector;
