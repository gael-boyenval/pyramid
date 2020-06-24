var plugins = [
  {
    plugin: require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
    options: { plugins: [] },
  },
  {
    plugin: require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
    options: { plugins: [] },
  },
  {
    plugin: require('/Users/gaelboyenval/web/perso/test-mono-repo-typescript/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
    options: {
      plugins: [],
      extensions: ['.mdx'],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            enableCustomId: true,
            className: 'anchor-toc',
            icon:
              '<svg version="1.1" viewBox="0 0 20 20">\n\t<path fill="currentColor" d="M3,12.5H0.4v-0.7h2.7L3.6,8H1V7.2h2.7l0.7-4.9h0.7L4.5,7.2h3.8l0.7-4.9h0.7L8.9,7.2h2.4V8H8.8l-0.5,3.8h2.5\n\t\tv0.7H8.2l-0.7,5.1H6.7l0.7-5.1H3.7L3,17.7H2.3L3,12.5z M7.6,11.8L8.1,8H4.3l-0.5,3.8H7.6z"/>\n</svg>',
          },
        },
        'gatsby-remark-static-images',
      ],
    },
  },
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
