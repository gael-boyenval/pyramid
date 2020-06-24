import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import StatusFlag from '../StatusFlag';
import './PageTabs.scss';

class PageTabs extends PureComponent {
  orderPageTab = (pageTabs) => {
    // order using frontmatter order tag and remove index
    const orderedTabs = [...pageTabs]
      .sort((a, b) => {
        return a.node.frontmatter.order - b.node.frontmatter.order;
      })
      .filter((tab) => tab.node.fields.fileName.name !== 'index');

    const cleanIndex = [...pageTabs].find(
      (tab) => tab.node.fields.fileName.name === 'index',
    );

    const newArr = [
      {
        title: 'Usage', // rename index tab 'Usage'
        slug: cleanIndex.node.fields.slug,
        status: cleanIndex.node.frontmatter.status,
      },
      ...orderedTabs.map((tab) => ({
        title: tab.node.frontmatter.title,
        slug: tab.node.fields.slug,
        status: tab.node.frontmatter.status,
      })),
    ];

    return newArr;
  };

  render() {
    const { samePageTabs } = this.props;
    const cleanTabs = this.orderPageTab(samePageTabs);

    return (
      <div className="c-page-tabs" id="page_tabs_menu">
        <div className="c-page-tabs__tabs">
          {cleanTabs.map((node) => (
            <Link
              className="c-page-tabs__tab"
              key={node.slug}
              to={node.slug}
              activeClassName="is-active"
            >
              {node.title}
              {node.status && (
                <>
                  <StatusFlag
                    className="c-page-tabs__flag"
                    status={node.status}
                  />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default PageTabs;
