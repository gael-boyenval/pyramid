import React from 'react';
import './Download.scss';

const DownloadIcon = () => (
  <svg
    viewBox="0 0 20 20"
    vectorEffect="non-scaling-stroke"
    className="c-download__icon"
  >
    <polyline points="17.2,7.9 10,15.2 2.7,7.9 " />
    <line x1="10" y1="14.8" x2="10" y2="1.4" />
    <line x1="4.1" y1="17.4" x2="15.9" y2="17.4" />
  </svg>
);

const Download: React.FC<DownloadProps> = ({
  path,
  buttonText,
  children,
}): JSX.Element => (
  <div className="c-download">
    <div className="c-download__wrapper">
      <div className="c-download__content">{children}</div>
      <a href={path} download alt={buttonText} className="c-download__button">
        <DownloadIcon />
        {buttonText}
      </a>
    </div>
  </div>
);

interface DownloadProps {
  path: string;
  buttonText: string;
  children: React.ReactChildren;
}

Download.displayName = 'Download';

export default Download;
