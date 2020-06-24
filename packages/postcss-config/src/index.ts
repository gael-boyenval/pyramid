import stylelintConfig from '@pyramid/stylelint-config';

const includePaths: string[] = [];

const plugins: Array<() => void> = [
  require('stylelint')(stylelintConfig),
  require('postcss-node-sass')({
    includePaths,
    outputStyle: 'expanded',
    indentWidth: 2,
    precision: 7,
  }),
  require('@pyramid/postcss-regroup-queries')({ sort: true }),
  require('postcss-csso')(),
  require('postcss-reporter')({ clearReportedMessages: true }),
];

export default plugins;
