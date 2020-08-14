import React, { createContext } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import './pattern-page.scss';
import './scope.mdx.scss';

import Layout from '../gatsby-components/layout';
import StatusFlag from '../gatsby-components/StatusFlag';

import PageTabs from '../gatsby-components/PageTabs';
import TableOfContents from '../gatsby-components/TableOfContents';
import { H1 } from '../gatsby-components/Typography';

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PreviewContext = createContext({});

export default ({ data, location }) => {
  const post = data.mdx;
  const { tableOfContents } = data.mdx;

  const otherPosts = data.allMdx.edges;

  const samePageTabs = [...otherPosts].filter(({ node }) => {
    const nodePath = node.fields.fileName.relativePath.replace(
      node.fields.fileName.base,
      '',
    );
    const postPath = post.fields.fileName.relativePath.replace(
      post.fields.fileName.base,
      '',
    );
    return nodePath === postPath;
  });

  // use the index title as main Page name
  // use the index status for all other tabs
  const parentFrontmatter = samePageTabs.find(
    (tab) => tab.node.fields.fileName.name === 'index',
  ).node.frontmatter;
  const parentTitle = parentFrontmatter.title;
  const parentDesc = parentFrontmatter.description;
  const hasTabs = samePageTabs.length > 1;

  return (
    <Layout location={location} tableOfContents={tableOfContents}>
      <header className="c-page__header">
        <H1 className="c-page__main-heading">{parentTitle}</H1>
        <p className="c-page__lead-body-copy">{parentDesc}</p>
        {!hasTabs && post.frontmatter.status && (
          <StatusFlag status={post.frontmatter.status} />
        )}
      </header>

      <PageContentWrapper>
        <div className="c-page__body">
          {hasTabs && <PageTabs samePageTabs={samePageTabs} />}
          <div className="s-mdx">
            <PreviewContext.Provider value={{ ...data.allPreview }}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </PreviewContext.Provider>
          </div>
        </div>
        <TableOfContents
          className="c-page__side-col"
          tableOfContents={tableOfContents}
        />
      </PageContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query MDXQuery($slug: String!, $patternIdentifier: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      tableOfContents
      fields {
        slug
        fileName {
          name
          base
          relativePath
          extension
        }
      }
      frontmatter {
        title
        order
        status
      }
    }
    allMdx(sort: { fields: [frontmatter___order], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            order
            status
            description
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
              extension
            }
          }
          excerpt
        }
      }
    }
    allPreview(filter: { forPattern: { eq: $patternIdentifier } }) {
      edges {
        node {
          content
          forPattern
          id
          iframePath
          type
          platform
          previewIdentifier
        }
      }
    }
  }
`;
