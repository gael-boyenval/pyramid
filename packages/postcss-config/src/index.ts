// import stylelintConfig from '@pyramid/stylelint-config';
import magicImporter from 'node-sass-magic-importer';

const includePaths: string[] = [];

const plugins: Array<() => void> = [
  // require('stylelint')(stylelintConfig),
  require('postcss-node-sass')({
    importer: magicImporter(),
    includePaths,
    outputStyle: 'expanded',
    indentWidth: 2,
    precision: 7,
  }),
  require('@pyramid/postcss-regroup-queries').default({ sort: true }),
  require('postcss-csso')(),
  require('postcss-reporter')({ clearReportedMessages: true }),
];

export default plugins;
