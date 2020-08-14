import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

const PreviewFrame = ({
  viewport,
  viewPorts,
  availableWidth,
  fullScreen,
  grid,
  iframeSrc,
  nude,
  toggleOptions,
}) => {
  const [iframeHeight, setIframeHeight] = useState(0);
  const frame = useRef(null);

  const resizeFrame = () => {
    setIframeHeight(
      frame.current &&
        frame.current.contentDocument &&
        frame.current.contentDocument.body
        ? frame.current.contentDocument.body.scrollHeight
        : '90px',
    );
  };

  const ViewportInfos = () => (
    <span className="c-preview__viewport-infos">
      Viewport: {viewPorts[viewport] || availableWidth}px{' '}
      {viewPorts[viewport] > availableWidth &&
        `• Zoom: ${
          Math.ceil((availableWidth / viewPorts[viewport]) * 1000) / 10
        }%`}
    </span>
  );

  const frameContainerStyle = () => ({
    height:
      availableWidth < viewPorts[viewport]
        ? `${
            (availableWidth / viewPorts[viewport]) * (iframeHeight + 2 * 16)
          }px`
        : ' ',
  });

  const frameWrapperStyle = () => {
    const scale =
      availableWidth > viewPorts[viewport]
        ? 1
        : availableWidth / viewPorts[viewport];

    return {
      width: `${viewPorts[viewport]}px`,
      minWidth: `${viewPorts[viewport]}px`,
      transform: `scale(${scale})`,
      transformOrigin: fullScreen ? 'center' : 'left top',
      margin: availableWidth > viewPorts[viewport] && !fullScreen && '0 auto',
    };
  };

  useEffect(() => {
    resizeFrame();
  });

  return fullScreen ? (
    <>
      <div
        className={cx('c-preview__frame-inner-container', {
          'c-preview__frame-inner-container--grid': grid,
        })}
        style={frameWrapperStyle()}
      >
        <iframe
          className="c-preview__iframe"
          frameBorder="0"
          height={iframeHeight}
          src={iframeSrc}
          ref={frame}
          onLoad={resizeFrame}
          scrolling="no"
        />
      </div>
      {!nude && <ViewportInfos />}
    </>
  ) : (
    <div
      className={cx('c-preview__frame-container')}
      style={frameContainerStyle()}
    >
      <div
        className={cx('c-preview__frame-inner-container', {
          'c-preview__frame-inner-container--grid': grid,
        })}
        style={frameWrapperStyle()}
      >
        <iframe
          className="c-preview__iframe"
          frameBorder="0"
          height={iframeHeight}
          src={iframeSrc}
          ref={frame}
          onLoad={resizeFrame}
          scrolling="no"
        />
      </div>
      {!fullScreen && (
        <button className="c-preview__toggle-options" onClick={toggleOptions}>
          {nude ? 'display options' : 'hide options'}
        </button>
      )}
      {!nude && <ViewportInfos />}
    </div>
  );
};

export default PreviewFrame;
