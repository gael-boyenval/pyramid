import React from 'react';
import SelectViewport from './PreviewToolBarSelect';

const icons = (elem) =>
  ({
    fullscreen: () => (
      <>
        <polyline points="8.9,1 14.9,1 14.9,7" />
        <line x1="14.9" y1="1" x2="8.9" y2="7" />
        <polyline points="6.6,15.4 0.6,15.4 0.6,9.4" />
        <line x1="0.6" y1="15.4" x2="6.6" y2="9.4" />
      </>
    ),
    reducescreen: () => (
      <>
        <polyline points="14.9,7 8.9,7 8.9,1" />
        <line x1="8.9" y1="7" x2="14.9" y2="1" />
        <polyline points="0.6,9.4 6.6,9.4 6.6,15.4" />
        <line x1="6.6" y1="9.4" x2="0.6" y2="15.4" />
      </>
    ),
    blanklink: () => (
      <>
        <polyline points="2.3,6 2.3,1.5 15.3,1.5 15.3,14.5 2.3,14.5 2.3,10 " />
        <polyline points="5.3,4 9.3,8 5.3,12" />
        <line x1="9.3" y1="8" x2="0" y2="8" />
      </>
    ),
    enlarge: () => (
      <>
        <rect x="1" y="1.6" width="14" height="12.4" />
        <polyline points="6.5,4 12.5,4 12.5,10 " />
        <line x1="12.5" y1="4" x2="6.5" y2="10" />
      </>
    ),
    grid: () => (
      <>
        <line x1="4.4" y1="0" x2="4.4" y2="16" />
        <line x1="11.7" y1="0" x2="11.7" y2="16" />
        <line x1="16" y1="4.3" x2="0" y2="4.3" />
        <line x1="16" y1="11.7" x2="0" y2="11.7" />
      </>
    ),
  }[elem]());

const Icon = ({ icon, size }) => (
  <svg
    className="c-preview__icon"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    vectorEffect="non-scaling-stroke"
  >
    {icons(icon)}
  </svg>
);

const PatternToolBar = ({
  changeViewPort,
  viewport,
  viewPorts,
  toggleFullScreen,
  fullScreen,
  showGrid,
  iframeSrc,
}) => (
  <div className="c-preview__toolbar">
    <div className="c-preview__left-tools">
      <div className="c-preview__tool-left">
        <button className="c-preview__button-icon" onClick={showGrid}>
          <Icon size={12} icon="grid" />
        </button>
      </div>

      <div className="c-preview__tool-left">
        <Icon size={12} icon="enlarge" />
        <SelectViewport
          viewPorts={viewPorts}
          viewport={viewport}
          changeViewPort={changeViewPort}
        />
      </div>
    </div>
    <div className="c-preview__right-tools">
      <div className="c-preview__tool-right">
        <a href={iframeSrc} target="_blank" rel="noopener noreferrer">
          <Icon size={12} icon="blanklink" />
        </a>
      </div>
      <div className="c-preview__tool-right">
        <button
          className="c-preview__button-icon"
          onClick={() => toggleFullScreen()}
        >
          {fullScreen ? (
            <Icon size={12} icon="reducescreen" />
          ) : (
            <Icon size={12} icon="fullscreen" />
          )}
        </button>
      </div>
    </div>
  </div>
);
export default PatternToolBar;
