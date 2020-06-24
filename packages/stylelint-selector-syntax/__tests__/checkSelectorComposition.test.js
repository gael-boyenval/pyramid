const { ruleName, messages } = require('../src/checkSelectorComposition');

global.testRule({
  plugins: ['../dist/index'],
  syntax: 'scss',
  ruleName,
  config: global.baseconfig,
  skipBasicChecks: false,
  accept: [
    // {
    //   code: `.c-block-name .is-open {} .l-drawer .is-open {}`,
    //   description: 'allow composition of components and layouts with states',
    // },
    // {
    //   code: `.c-block-name .c-block-name__element {} .l-grid .l-grid__item {}`,
    //   description: 'allow composition of a block with the same block',
    // },
    // {
    //   code: `.s-scope .any-class {} .s-scope div {} .theme-dark .any-class {}`,
    //   description: 'allow composition of anything within scopes and themes',
    // },
    // {
    //   code: `.c-block::after {} .c-block::placeholder:hover {} .u-stuff:before {}`,
    //   description:
    //     'allow usage of pseudo class and pseudo elements on any types',
    // },
    // {
    //   code: `.c-block::after, .c-block::placeholder:hover, .u-stuff:before {}`,
    //   description:
    //     'allow usage of pseudo class and pseudo elements on any types',
    // },
    // {
    //   code: `ul > li, ul > li:last-child {}`,
    //   description: 'allow chaining tags',
    // },
    // {
    //   code: `.c-block { &__element {}}`,
    //   description: 'allow chaining tags',
    // },
    // {
    //   code: `.s-toto .toto .toto {}`,
    //   description: 'can check with depth',
    // },
  ],

  reject: [
    {
      code: `.c-block-name .other {}`,
      description: 'reject composition of components with unknown classes',
      message: messages.invalidClassMutation(
        '.c-block-name .other',
        'c-block-name',
        'other',
      ),
    },
    // {
    //   code: `.c-block-name .c-other-block {}`,
    //   description: 'reject composition of a block within another block',
    //   message: messages.invalidClassMutation(
    //     '.c-block-name .c-other-block',
    //     'c-block-name',
    //     'c-other-block',
    //   ),
    // },
    // {
    //   code: `.c-block-name div {}`,
    //   description: 'reject tags selection within blocks',
    //   message: messages.invalidTagMutation('.c-block-name div', 'div'),
    // },
    // {
    //   code: `.u-block-name div {}`,
    //   description: 'reject utility combination with tags',
    //   message: messages.classIsNotComposable(
    //     '.u-block-name div',
    //     'u-block-name',
    //     'utilities',
    //   ),
    // },
    // {
    //   code: `.u-block-name .u-block-name__hello {}`,
    //   description: 'reject utility combination alltogether',
    //   message: messages.classIsNotComposable(
    //     '.u-block-name .u-block-name__hello',
    //     'u-block-name',
    //     'utilities',
    //   ),
    // },
    // {
    //   code: `div .any-class {}`,
    //   description: 'reject modified class within tags',
    //   message: messages.invalidClassMutationWithinTag(
    //     'div .any-class',
    //     'div',
    //     'any-class',
    //   ),
    // },
    // {
    //   code: `.c-block-name { &__element .c-other-block {}}`,
    //   description: 'reject same rules using & (nested selectors)',
    //   message: messages.invalidClassMutation(
    //     '&__element .c-other-block',
    //     'c-block-name__element',
    //     'c-other-block',
    //   ),
    // },
    // {
    //   code: `.s-toto .c-toto .toto {}`,
    //   description: 'reject even when deeply nested',
    //   message: messages.invalidClassMutation(
    //     '.s-toto .c-toto .toto',
    //     'c-toto',
    //     'toto',
    //   ),
    // },
  ],
});
