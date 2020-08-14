import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import './MenuItem.scss';

const MenuItem = ({ to, content, level, isPartOfCurrentlocation }) =>
  to ? (
    <Link
      to={to}
      className={classNames('c-menu-link', {
        'c-menu-link--level-1': level - 1 === 1,
        'c-menu-link--level-2': level - 1 === 2,
        'c-menu-link--level-3': level - 1 >= 3,
        'is-part-of-current-location': isPartOfCurrentlocation,
      })}
    >
      {isPartOfCurrentlocation ? <mark>{content}</mark> : <>{content}</>}
    </Link>
  ) : (
    <p>{content}</p>
  );

MenuItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  isPartOfCurrentlocation: PropTypes.bool,
};

export { MenuItem };
