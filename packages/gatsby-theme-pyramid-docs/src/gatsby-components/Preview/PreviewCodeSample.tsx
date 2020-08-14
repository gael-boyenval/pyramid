import React from 'react';
import cx from 'classnames';

import Code from '../Code';

const PreviewCodeSample = ({
  preview,
  showCode,
  currentCodeSample,
  fullScreen,
  showMore,
  open,
}) => {
  return (
    <>
      <div className="c-preview__code-tabs">
        {Object.keys(preview).map((codeSampleName) => (
          <button
            className={cx('c-preview__code-tabs-item', {
              'is-active': codeSampleName === currentCodeSample,
            })}
            key={`${preview}${codeSampleName}`}
            onClick={() => showCode(codeSampleName)}
          >
            {codeSampleName}
          </button>
        ))}
      </div>
      <div
        className={cx('c-preview__code-body', {
          'is-expended': open,
        })}
      >
        <Code copy={true} fullScreen={fullScreen}>
          <code className={currentCodeSample}>
            {preview[currentCodeSample]}
          </code>
        </Code>
      </div>

      {!fullScreen && (
        <div className="c-preview__code-footer">
          <button
            className="c-preview__show-more-btn"
            onClick={() => showMore()}
          >
            {open ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </>
  );
};
export default PreviewCodeSample;
