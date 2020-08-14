import React from 'react';
import cx from 'classnames';
import './Highlight.scss';

const defaultTitles = {
  info: 'Information',
  warning: 'Warning',
  tips: 'Useful tip',
};

const Highlight = ({ children, theme = 'info', title }) => (
  <div
    className={cx('c-highlight', {
      'c-highlight--info': theme === 'info',
      'c-highlight--warn': theme === 'warning',
      'c-highlight--tips': theme === 'tips',
    })}
  >
    <h3 className="c-highlight__title">{title || defaultTitles[theme]}</h3>
    <div className="c-highlight__content">{children}</div>
  </div>
);

export default Highlight;
