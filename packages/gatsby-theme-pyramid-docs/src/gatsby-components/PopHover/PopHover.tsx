import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';

import { computePosition, defineBestSide } from './ComputePosition';
import './PopHover.scss';

const Portal = ({ children }) => {
  const mount = document.getElementById('pop-hover');
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

const PopHover: React.FC<PopHoverProps> = ({
  children,
  Infos,
  popSide = 'auto',
}): JSX.Element => {
  const content = useRef(null);
  const [side, setSide] = useState('top');
  const [elementsPosition, setElementsPosition] = useState({});
  const [isRootHover, setIsRootHover] = useState(false);
  const [isPopHover, setIsPopHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event): void => {
      event = event || window.event;
      // escape pressed => make sure to hide the tooltip
      if (event.keyCode == 27) {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isVisible]);

  // compute styles position depending on available
  // either the source component or the tooltip
  useEffect(() => {
    if (!position) return;
    popSide === 'auto'
      ? setSide(defineBestSide(position, window.innerHeight, window.innerWidth))
      : setSide(popSide);

    setElementsPosition(
      computePosition(position, window.innerHeight, window.innerWidth),
    );

    setIsVisible(isPopHover || isRootHover);
  }, [position]);

  // add bounding positions of trigger element
  // to state when component mount
  useEffect(() => {
    setPosition(content.current.getBoundingClientRect());
  }, []);

  // trigger position computations when hovering
  // either the source component or the tooltip
  useEffect(() => {
    setPosition(content.current.getBoundingClientRect());
  }, [isRootHover, isPopHover]);

  return Infos ? (
    <>
      <div
        onMouseOver={() => setIsRootHover(true)}
        onFocus={() => setIsRootHover(true)}
        onBlur={() => setIsRootHover(false)}
        ref={content}
        className="c-pop-hover-wrapper"
        tabIndex={0}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      {isVisible && position && (
        <Portal>
          <div
            id="tooltip"
            role="tooltip"
            onMouseOver={() => setIsPopHover(true)}
            onMouseLeave={() => {
              setIsPopHover(false);
              setIsRootHover(false);
            }}
            className={cx(`c-pop-hover c-pop-hover--${side}`, {
              'is-visible': isVisible,
            })}
            style={elementsPosition[side].global}
          >
            <div
              className="c-pop-hover__ghost-zone"
              style={elementsPosition[side].ghost}
            ></div>

            <div className="c-pop-hover__infos-wrapper">
              <div className="c-pop-hover__infos">
                <Infos />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  ) : (
    <>{children}</>
  );
};

interface PopHoverProps {
  children: React.ReactNode;
  Infos?: React.ReactNode;
  popSide?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

PopHover.displayName = 'PopHover';

export default PopHover;
