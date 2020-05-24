export const options = {
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
