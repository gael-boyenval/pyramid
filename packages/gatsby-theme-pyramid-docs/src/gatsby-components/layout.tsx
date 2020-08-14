import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { StaticQuery, graphql } from 'gatsby';

import './base.scss';
import './Layout.scss';
import Menu from './Menu';
import withLocationPreview from './Preview/withLocation';
import Color from './Color';
import Swatch from './Swatch';
import Do from './Do';
import DoDont, { DoDontBlock } from './DoDont';
import Download from './Download';
import IconViewer from './IconViewer';
import Code from './Code';
import InlineCode from './InlineCode';
import Highlight from './Highlight';
import SubContents from './SubContents';
import DesignerKitLink from './DesignerKitLink';
import Header from './Header';
import { H2, H3, H4 } from './Typography';

const Layout = ({ children, location }) => {
  const Preview = withLocationPreview(location);

  const shortcodes = {
    SubContents: SubContents(location),
    Preview,
    Download,
    Color,
    Swatch,
    Do,
    DoDont,
    DoDontBlock,
    IconViewer,
    DesignerKitLink,
    Highlight,
    pre: Code,
    code: Code,
    inlineCode: InlineCode,
    h1: H2,
    h2: H2,
    h3: H3,
    h4: H4,
  };

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <div className="l-layout">
            <div className="l-layout__header">
              <Header location={location} dsName="Pyramid" version="v1.14.24" />
            </div>

            <div className="l-layout__left-menu">
              <Menu
                location={location}
                siteTitle={data.site.siteMetadata.title}
              />
            </div>

            <MDXProvider components={shortcodes}>
              <div className="l-layout__main" id="scroller">
                {children}
              </div>
            </MDXProvider>
          </div>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
