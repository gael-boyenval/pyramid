module.exports = (plop) => {
  // controller generator
  plop.setGenerator('package', {
    description: 'create a new package in the packages directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'package name please',
      },
      {
        type: 'input',
        name: 'description',
        message: 'package description please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        templateFiles: 'plop-templates/package/**/*',
        base: 'plop-templates/package/',
      },
    ],
  });

  // controller generator
  plop.setGenerator('gcomponent', {
    description: 'create a new gatsby component within gatsby-doc',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination:
          'packages/gatsby-theme-pyramid-docs/src/gatsby-components/{{pascalCase name}}',
        templateFiles: 'plop-templates/Gcomponent/**/*',
        base: 'plop-templates/Gcomponent/',
      },
    ],
  });
};
