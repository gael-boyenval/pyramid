import React, { PureComponent } from 'react';
import cx from 'classnames';

import PreviewCodeSample from './PreviewCodeSample';
import PreviewToolBar from './PreviewToolBar';
import PreviewFrame from './PreviewFrame';

import copyToClipboard from '../../utils/copy-to-clipboard';

let viewPorts = {};

const tokensObject = {
  screen: {
    xl: '1280px',
    l: '1024px',
    m: '720px',
    s: '380px',
    xs: '320px',
  },
};

Object.keys(tokensObject.screen).forEach(
  (screenName) =>
    (viewPorts[screenName] = Number(
      tokensObject.screen[screenName].replace('px', ''),
    )),
);

export class PreviewComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.availableWidth = null;
    this.contRef = React.createRef();
    this.body = React.createRef();
    this.state = {
      currentCodeSample: 'html',
      copyCompatible: false,
      copied: false,
      location: '',
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ location: window.location });
    }
  }

  componentDidUpdate() {
    if (this.props.fullScreen) {
      this.setState({ availableWidth: this.body.clientWidth });
    } else {
      this.setState({ availableWidth: this.contRef.current.clientWidth });
    }
  }

  getLanguage = (ext) =>
    ({
      js: 'javascript',
      json: 'JSON',
      html: 'html',
      css: 'css',
      scss: 'scss',
    }[ext]);

  showCode = (codeSampleName) => {
    this.setState({
      currentCodeSample: codeSampleName,
      copied: false,
    });
  };

  copyToClipBoard = () => {
    copyToClipboard(this.props.children)
      .then(() => {
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 3000);
      })
      .catch(() => false);
  };

  render() {
    const {
      viewport,
      changeViewPort,
      fullScreen,
      toggleFullScreen,
      showGrid,
      grid,
      showMore,
      open,
      nude,
      codes,
      url,
      toggleOptions,
    } = this.props;

    const {
      currentCodeSample,
      copied,
      copyCompatible,
      availableWidth,
    } = this.state;

    return (
      <div
        className={cx('c-preview', {
          'c-preview--fullscreen': fullScreen,
          'c-preview--with-options': !nude,
        })}
      >
        {fullScreen ? (
          <div className="c-preview__inner-container">
            <div className="c-preview__left-column">
              <PreviewToolBar
                fullScreen={fullScreen}
                availableWidth={availableWidth}
                toggleFullScreen={toggleFullScreen}
                viewport={viewport}
                viewPorts={viewPorts}
                changeViewPort={changeViewPort}
                showGrid={showGrid}
                grid={grid}
                iframeSrc={url}
              />
              <div
                className="c-preview__body"
                ref={(body) => (this.body = body)}
              >
                <PreviewFrame
                  availableWidth={availableWidth}
                  viewport={viewport}
                  viewPorts={viewPorts}
                  fullScreen={fullScreen}
                  data={this.props.data}
                  grid={grid}
                  showGrid={showGrid}
                  iframeSrc={url}
                />
              </div>
            </div>
            <div className="c-preview__right-column">
              <PreviewCodeSample
                fullScreen={fullScreen}
                preview={codes}
                showCode={this.showCode}
                currentCodeSample={currentCodeSample}
                copied={copied}
                copyCompatible={copyCompatible}
                copyCodeToClipBoard={this.copyCodeToClipBoard}
                open={open}
                showMore={showMore}
              />
            </div>
          </div>
        ) : (
          <div ref={this.contRef} style={{ margin: '2rem 0' }}>
            {!nude && (
              <PreviewToolBar
                fullScreen={fullScreen}
                availableWidth={availableWidth}
                toggleFullScreen={toggleFullScreen}
                viewport={viewport}
                viewPorts={viewPorts}
                changeViewPort={changeViewPort}
                showGrid={showGrid}
                grid={grid}
                iframeSrc={url}
              />
            )}
            <PreviewFrame
              availableWidth={availableWidth}
              viewport={viewport}
              viewPorts={viewPorts}
              fullScreen={fullScreen}
              data={this.props.data}
              grid={grid}
              toggleOptions={toggleOptions}
              nude={nude}
              iframeSrc={url}
            />

            {!nude && (
              <PreviewCodeSample
                fullScreen={fullScreen}
                preview={codes}
                showCode={this.showCode}
                currentCodeSample={currentCodeSample}
                copied={copied}
                copyCompatible={copyCompatible}
                copyCodeToClipBoard={this.copyCodeToClipBoard}
                getLanguage={this.getLanguage}
                open={open}
                showMore={showMore}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PreviewComponent;
