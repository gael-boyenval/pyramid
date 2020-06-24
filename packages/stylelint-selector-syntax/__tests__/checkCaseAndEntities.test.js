const { ruleName, messages } = require('../src/checkCase');

global.testRule({
  plugins: ['../dist/index'],
  syntax: 'scss',
  ruleName,
  config: global.baseconfig,
  skipBasicChecks: false,
  accept: [
    {
      code: `.c-block-name__element-name {}`,
      description: 'allow clasic BEM notation',
    },
    {
      code: `@media screen and (min-width: 680px) { .c-block-name__element-name {} }`,
      description: 'allow clasic BEM notation in @media rules',
    },
    {
      code: `DIV {}`,
      description: 'Do not check tags case',
    },
    {
      code: `.c-my-call--small\@from-m {}`,
      description: 'Allow resposive modifiers with escaped chars',
    },
    {
      code: `
            /* pyramid-disable */
            .totoDSOUKFZkjqn--zefkhg { color: blue }
            /* pyramid-enable */

            .c-toto-tata__tutu { color: blue }
          `,
      description:
        'Allow bad syntax inside /* pyramid-disable / unable */ comments',
    },
  ],
  reject: [
    {
      code: `.l-Container {}`,
      message: messages.expectedSyntax('Container', 'l-Container', 'kebabCase'),
      description: 'Reject non kebab-case with default options',
    },
    {
      code: `@media screen and (min-width: 680px) { .c-Block-name__element-name {} }`,
      message: messages.expectedSyntax(
        'Block-name',
        'c-Block-name__element-name',
        'kebabCase',
      ),
      description:
        'Reject non kebab-case with default options inside @media rules',
    },
    {
      code: `/* pyramid-enable */`,
      message: 'pyramid linter is allready enabled',
      description: 'Reject enabling pyramid when it is already enabled',
    },
    {
      code: `/* pyramid-disable */
            /* pyramid-disable */`,
      message: 'pyramid linter is allready disabled',
      description: 'Reject disabling pyramid when it is already disabled',
    },
  ],
});
//  test camelCase
global.testRule({
  plugins: ['../dist/index'],
  ruleName,
  config: global.baseConfigAssign({ caseStyle: 'camelCase' }),
  skipBasicChecks: true,
  accept: [
    {
      code: `.c-blockName__elementName {}`,
      description: 'Allow standard BEM case using camelCase for entities',
    },
    {
      code: `@media screen and (min-width: 680px) {
            .c-blockName__elementName {}
        }
        `,
      description:
        'Allow standard BEM case using camelCase inside @media rules',
    },
  ],

  reject: [
    {
      code: `.l-Container {}`,
      message: messages.expectedSyntax('Container', 'l-Container', 'camelCase'),
      description: 'Reject non camelCase when option is set to camel-case',
    },
    {
      code: `@media screen and (min-width: 680px) {
            .c-blockName__element-name {}
        }
        `,
      message: messages.expectedSyntax(
        'element-name',
        'c-blockName__element-name',
        'camelCase',
      ),
      description:
        'Reject non camelCase when option is set to camel-case inside @media rules',
    },
  ],
});

// test snake_case
global.testRule({
  plugins: ['../dist/index'],
  ruleName,
  config: global.baseConfigAssign({ caseStyle: 'snakeCase' }),
  skipBasicChecks: true,

  accept: [
    {
      code: `.c-block_same__element_name {}`,
      description: 'Allow standard BEM case using snake_case for entities',
    },
    {
      code: `@media screen and (min-width: 680px) {
            .c-block_same__element_name {}
        }
        `,
      description:
        'Allow standard BEM case using snake_case inside @media rules',
    },
  ],

  reject: [
    {
      code: `.l-Container {}`,
      message: messages.expectedSyntax('Container', 'l-Container', 'snakeCase'),
      description: 'Reject non snake_case when option is set to snake_case',
    },
    {
      code: `@media screen and (min-width: 680px) {
            .c-block-name__element_name {}
        }
        `,
      message: messages.expectedSyntax(
        'block-name',
        'c-block-name__element_name',
        'snakeCase',
      ),
      description:
        'Reject non snake_case when option is set to snake_case inside @media rules',
    },
  ],
});

//  test pascalCase
global.testRule({
  plugins: ['../dist/index'],
  ruleName,
  config: global.baseConfigAssign({ caseStyle: 'pascalCase' }),
  skipBasicChecks: true,
  accept: [
    {
      code: `.c-BlockName__ElementName {}`,
      description: 'Allow standard BEM case using pascalCase',
    },
    {
      code: `@media screen and (min-width: 680px) {
            .c-BlockName__ElementName {}
        }
        `,
      description:
        'Allow standard BEM case using pascalCase inside @media rules',
    },
  ],
  reject: [
    {
      code: `.l-container {}`,
      message: messages.expectedSyntax(
        'container',
        'l-container',
        'pascalCase',
      ),
      description: 'Reject non pascalCase when option is set to snake_case',
    },
    {
      code: `@media screen and (min-width: 680px) {
        .c-block-name__ElementName {}
      }`,
      message: messages.expectedSyntax(
        'block-name',
        'c-block-name__ElementName',
        'pascalCase',
      ),
      description:
        'Reject non pascalCase when option is set to pascalCase inside @media rules',
    },
  ],
});

// test case using regex
global.testRule({
  plugins: ['../dist/index'],
  ruleName,
  config: global.baseConfigAssign({ caseStyle: /^[A-Z]+(_[A-Z]+)*$/ }),
  skipBasicChecks: true,

  accept: [
    {
      code: `.c-BLOCK_SAME__ELEMENT_NAME {}`,
      description: 'allow custom case using REGEX',
    },
  ],

  reject: [
    {
      code: `.c-container {}`,
      message: messages.expectedSyntax(
        'container',
        'c-container',
        '/^[A-Z]+(_[A-Z]+)*$/',
      ),
      description: 'Reject bad case when option is set with REGEX',
    },
  ],
});
