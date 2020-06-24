import { Rule } from 'postcss';
declare type SelectorPartType = 'attribute' | 'class' | 'combinator' | 'comment' | 'id' | 'nesting' | 'pseudo' | 'root' | 'selector' | 'string' | 'tag' | 'universal';
export interface SelectorPart {
    value: string;
    type: SelectorPartType;
}
export declare type ResolvedSelector = string[];
export declare type Selector = SelectorPart[];
export declare type SelectorDef = Selector[];
export interface BemPart {
    partType: string;
    string: string;
}
export interface SelectorBlockType {
    name: string;
    prefix?: string | string[];
    allowComposition?: string[];
}
export declare type BemStructure = BemPart[];
export interface PyramidSelectorPart {
    value: string;
    type: SelectorPartType;
    blockIdentifier?: string;
    blockType?: SelectorBlockType;
    bemStructure?: BemPart[];
}
export declare type PyramidSelector = PyramidSelectorPart[];
export declare type PyramidSelectorList = PyramidSelector[];
export interface PyramidRule extends Rule {
    pyramidSelector?: PyramidSelectorList;
}
export {};
