import React, { useState, useEffect } from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import { parseLocation } from '../SiteMapData/tools';
import Search from '../Search';

import './Header.scss';

interface SiteMapItem {
  name: string;
  slug: string;
}

interface HeaderProps {
  dsName: string;
  version: string;
  siteMapData: SiteMapItem[];
}

const Header: React.FC<HeaderProps> = ({
  dsName,
  version,
  siteMapData,
  location,
}: HeaderProps) => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const sitemap = parseLocation(siteMapData, location);

  useEffect(() => {
    // reset search to false when page change
    setSearchOpen(false);
  }, [location]);

  return (
    <header className="c-header">
      <div className="c-header__logo">
        <Link className="c-header__logo-link" to="/">
          {dsName}
        </Link>
        <span className="c-header__logo-version">{version}</span>
      </div>
      <nav className="c-header__nav">
        <ul className="c-header__nav-items">
          {sitemap.map(({ name, slug, isPartOfCurrentlocation }) => (
            <li key={`${slug}-${name.trim()}`} className="c-header__nav-item">
              <Link
                to={slug}
                activeClassName="c-header__nav-link--active"
                className={'c-header__nav-link'}
              >
                {isPartOfCurrentlocation ? <mark>{name}</mark> : <>{name}</>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="c-header__search-btn"
        onClick={() => setSearchOpen(true)}
      >
        <svg
          className="c-header__search-icon"
          viewBox="0 0 20 20"
          vectorEffect="non-scalling-stroke"
        >
          <line x1="13.9" y1="13.9" x2="17.8" y2="17.8" />
          <circle cx="8.3" cy="8.1" r="5.4" />
        </svg>
        Search
      </button>
      {isSearchOpen && (
        <div className="c-header__search-layout">
          <Search close={() => setSearchOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
