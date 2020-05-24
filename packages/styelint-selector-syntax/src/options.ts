interface BemEntitiesDelimiters {
  modifier: string;
  element: string;
  media: string;
}

export interface BlockType {
  name: string;
  prefix: string | string[];
  allowComposition: string[];
}

export interface Options {
  caseStyle: string | RegExp;
  bemEntitiesDelimiters: BemEntitiesDelimiters;
  blockTypes: BlockType[];
}
