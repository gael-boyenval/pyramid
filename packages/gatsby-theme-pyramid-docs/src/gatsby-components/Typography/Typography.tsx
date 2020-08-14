import React from 'react';
import classNames from 'classnames';

import './Typography.scss';

export const H1 = ({ children, className, ...rest }) => (
  <h1
    className={classNames('t-heading-1', { [className]: className })}
    {...rest}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className, ...rest }) => (
  <h2
    className={classNames('t-heading-2', { [className]: className })}
    {...rest}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className, ...rest }) => (
  <h3
    className={classNames('t-heading-3', { [className]: className })}
    {...rest}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className, ...rest }) => (
  <h4
    className={classNames('t-heading-4', { [className]: className })}
    {...rest}
  >
    {children}
  </h4>
);
