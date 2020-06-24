module.exports = [
  {
    plugin: require('../../../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
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
  {
    plugin: require('../../../node_modules/gatsby-plugin-flexsearch/gatsby-browser.js'),
    options: {
      plugins: [],
      encode: 'balance',
      tokenize: 'strict',
      threshold: 0,
      resolution: 3,
      depth: 3,
      limit: 10,
      languages: ['en'],
      type: 'Mdx',
      fields: [
        {
          name: 'keywords',
          indexed: true,
          resolver: 'fields.keywords',
          attributes: { encode: 'advanced', tokenize: 'full', resolution: 9 },
          store: true,
        },
        {
          name: 'title',
          indexed: true,
          resolver: 'frontmatter.title',
          attributes: {
            encode: 'advanced',
            tokenize: 'full',
            resolution: 9,
            boost: 9,
          },
          store: true,
        },
        {
          name: 'description',
          indexed: true,
          resolver: 'frontmatter.description',
          attributes: { encode: 'advanced', tokenize: 'full', resolution: 9 },
          store: true,
        },
        { name: 'url', indexed: true, resolver: 'fields.slug', store: true },
      ],
    },
  },
  {
    plugin: require('../gatsby-browser.js'),
    options: { plugins: [] },
  },
];
