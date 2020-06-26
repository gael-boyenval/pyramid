import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from './MenuItem';
import withSiteMapData from '../SiteMapData';
import { parseLocation } from '../SiteMapData/tools';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import './Menu.scss';

const getTopLevelSubItems = (siteMapData, location) => {
  console.log(parseLocation(siteMapData, location));

  const currentTopLevel = parseLocation(siteMapData, location).find(
    (item) => item.isPartOfCurrentlocation,
  );

  return currentTopLevel?.content || [];
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuArray: getTopLevelSubItems(
        this.props.siteMapData,
        this.props.location,
      ),
    };
  }

  openMenu = (dirPath) => {
    const setOpenItems = (subMenu) =>
      subMenu.map((item, i) => {
        if (dirPath.includes(item.dirPath)) {
          item.isOpened = true;
        }

        if (item.content && item.content.length > 0) {
          item.content = setOpenItems(item.content);
        }

        return item;
      });

    this.setState({
      menuArray: setOpenItems(this.state.menuArray),
    });
  };

  closeMenu = (dirPath) => {
    const setCloseItem = (subMenu) =>
      subMenu.map((item, i) => {
        if (dirPath === item.dirPath) {
          item.isOpened = false;
        }

        if (item.content && item.content.length > 0) {
          item.content = setCloseItem(item.content);
        }

        return item;
      });

    this.setState({ menuArray: setCloseItem(this.state.menuArray) });
  };

  buildMenu = (menuArray, isOpened = true) => (
    <ul className={classNames('c-left-menu__group', { 'is-open': isOpened })}>
      {menuArray.length &&
        menuArray.map((item) => {
          return (
            <li key={item.dirPath}>
              <div className="c-left-menu__item">
                <MenuItem
                  to={item.slug}
                  content={item.title}
                  level={item.level}
                  isPartOfCurrentlocation={item.isPartOfCurrentlocation}
                />
                {item.content.length > 0 && (
                  <button
                    className="c-left-menu__open-btn"
                    onClick={
                      item.isOpened
                        ? () => this.closeMenu(item.dirPath)
                        : () => this.openMenu(item.dirPath)
                    }
                  >
                    <svg
                      className={classNames('c-left-menu__open-icon', {
                        'is-open': item.isOpened,
                        'c-left-menu__open-icon--level-1': item.level - 1 === 1,
                      })}
                      viewBox="0 0 20 20"
                      vectorEffect="non-scaling-stroke"
                    >
                      <polyline
                        stroke="currentColor"
                        fill="transparent"
                        points="17.9,6.5 10,14.4 2.1,6.5"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {item.content.length > 0 && (
                <CSSTransition
                  in={isOpened}
                  timeout={350}
                  classNames="is-open"
                  unmountOnExit
                >
                  {this.buildMenu(item.content, item.isOpened)}
                </CSSTransition>
              )}
            </li>
          );
        })}
    </ul>
  );
  render() {
    return (
      !!this.state.menuArray.length && (
        <aside className="c-left-menu">
          {this.buildMenu(this.state.menuArray, true)}
        </aside>
      )
    );
  }
}

export default withSiteMapData({ Component: Menu });
