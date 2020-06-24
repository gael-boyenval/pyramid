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

const options: Options = {
  caseStyle: 'kebabCase',
  bemEntitiesDelimiters: {
    modifier: '--',
    element: '__',
    media: '@',
  },
  blockTypes: [
    {
      name: 'layouts',
      prefix: 'l-',
      allowComposition: ['states'],
    },
    {
      name: 'typography',
      prefix: 't-',
      allowComposition: ['states'],
    },
    {
      name: 'utilities',
      prefix: 'u-',
      allowComposition: [],
    },
    {
      name: 'components',
      prefix: 'c-',
      allowComposition: ['states'],
    },
    {
      name: 'scopes',
      prefix: 's-',
      allowComposition: ['any'],
    },
    {
      name: 'themes',
      prefix: 'theme-',
      allowComposition: ['any'],
    },
    {
      name: 'states',
      prefix: ['is-', 'has-', 'will-'],
      allowComposition: ['anyClass'],
    },
  ],
};

export default options;
