const { hot } = require('react-hot-loader/root');

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': hot(
    preferDefault(
      require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/packages/gatsby-theme-pyramid-docs/.cache/dev-404-page.js'),
    ),
  ),
  'component---src-pages-404-tsx': hot(
    preferDefault(
      require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/packages/gatsby-theme-pyramid-docs/src/pages/404.tsx'),
    ),
  ),
  'component---src-templates-pattern-page-tsx': hot(
    preferDefault(
      require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/packages/gatsby-theme-pyramid-docs/src/templates/pattern-page.tsx'),
    ),
  ),
};
