import React from 'react';
import classNames from 'classnames';
import './Do.scss';

export const Icon = ({ not, className }) => (
  <svg
    className={classNames('c-do__icon', {
      [className]: className,
      'c-do--not': not,
    })}
    viewBox="0 0 20 20"
  >
    <circle className="c-do__icon-circle" cx="10" cy="10" r="10" />
    {not ? (
      <>
        <line
          className="c-do__icon-path"
          x1="5.4"
          y1="5.4"
          x2="14.6"
          y2="14.6"
        />
        <line
          className="c-do__icon-path"
          x1="5.4"
          y1="14.6"
          x2="14.6"
          y2="5.4"
        />
      </>
    ) : (
      <path
        id="Tracé_8"
        className="c-do__icon-path"
        d="M5.3,8.8l3.9,5l6.2-8.2"
      />
    )}
  </svg>
);

const Do = ({ children, not }) => (
  <div className={classNames('c-do', { 'c-do--not': not })}>
    <div className="c-do__icon-wrapper">
      <Icon not={not} />
    </div>
    <div className="c-do__content">{children}</div>
  </div>
);

export default Do;
