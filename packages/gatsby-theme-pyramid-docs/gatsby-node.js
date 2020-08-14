const express = require('express');
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * gatsby api hook that will run when the development server is started
 * adding this line will allow to extend the server development configuration.
 * For this special case it will allow the content inside the public folder that gatsby will generate to be served and accessible.
 * more on that here =>https://www.gatsbyjs.org/docs/node-apis/#onCreateDevServer
 *
 */

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('previews'));
};

exports.onCreateNode = async (
  { node, getNode, actions, loadNodeContent, createContentDigest, reporter },
  options,
) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `File` &&
    node.relativePath.includes('/_previews/')
  ) {
    const file = path.parse(node.relativePath);
    const reversedFileParents = file.dir
      .split(path.sep)
      .reverse()
      .map((elem) => elem.replace(/_/gi, ''));

    const id = `previews-${node.relativePath.replace(/_/gi, '')}`;

    const iframePath = `${path.sep}${file.dir
      .replace(/_/gi, '')
      .replace(/previews/gi, '')}${file.name}.html`;

    const platform = reversedFileParents[1];
    const type = file.ext.replace('.', '');
    const content = await loadNodeContent(node);
    const forPattern =
      path.sep +
      reversedFileParents.slice(2).reverse().join(path.sep) +
      path.sep;
    const previewIdentifier = `${platform}.${file.name}`;

    const newNode = {
      id,
      iframePath,
      platform,
      forPattern,
      content,
      type,
      previewIdentifier,
    };

    actions.createNode({
      ...newNode,
      internal: {
        type: `preview`,
        contentDigest: createContentDigest(newNode),
      },
    });
  }

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `lib` });
    const fileName = path.basename(node.fileAbsolutePath);

    const keywords = `${slug.split('/').join(', ')}, ${
      node.frontmatter.searchKeywords
    }`;

    const patternIdentifier = slug
      .split(path.sep)
      .filter(
        (i) =>
          !['scss', 'htmlscss', 'react'].some((platform) => i === platform),
      )
      .join(path.sep);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `patternIdentifier`,
      value: patternIdentifier,
    });

    createNodeField({
      node,
      name: `keywords`,
      value: keywords,
    });

    createNodeField({
      node,
      name: `fileName`,
      value: fileName,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              patternIdentifier
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, 'src', 'templates', 'pattern-page.tsx'),
      context: {
        id: node.id,
        slug: node.fields.slug,
        patternIdentifier: node.fields.patternIdentifier,
      },
    });
  });
};
