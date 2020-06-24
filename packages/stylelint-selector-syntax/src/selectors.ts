import { Rule } from 'postcss';

type SelectorPartType =
  | 'attribute'
  | 'class'
  | 'combinator'
  | 'comment'
  | 'id'
  | 'nesting'
  | 'pseudo'
  | 'root'
  | 'selector'
  | 'string'
  | 'tag'
  | 'universal';

export interface SelectorPart {
  value: string;
  type: SelectorPartType;
}

export type ResolvedSelector = string[];

export type Selector = SelectorPart[];

export type SelectorDef = Selector[];

export interface BemPart {
  partType: string;
  string: string;
}

export interface SelectorBlockType {
  name: string;
  prefix?: string | string[];
  allowComposition?: string[];
}

export type BemStructure = BemPart[];

export interface PyramidSelectorPart {
  value: string;
  type: SelectorPartType;
  blockIdentifier?: string;
  blockType?: SelectorBlockType;
  bemStructure?: BemPart[];
}

export type PyramidSelector = PyramidSelectorPart[];
export type PyramidSelectorList = PyramidSelector[];

export interface PyramidRule extends Rule {
  pyramidSelector?: PyramidSelectorList;
}
