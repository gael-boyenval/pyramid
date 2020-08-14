import React from 'react';
import cx from 'classnames';
import './DoDont.scss';

import { Icon } from '../Do';

const DoDont = ({ children, full = false }) => (
  <div
    className={cx('c-dodont', {
      'c-dodont--full': full,
    })}
  >
    {children}
  </div>
);

export const DoDontBlock = ({ children, text, not = false }) => (
  <div
    className={cx('c-dodont__block', {
      'c-dodont__block--not': not,
    })}
  >
    <div className="c-dodont__example">
      <Icon not={not} className="c-dodont__icon" />
      {children}
    </div>
    <div className="c-dodont__text">{text}</div>
  </div>
);

export default DoDont;
