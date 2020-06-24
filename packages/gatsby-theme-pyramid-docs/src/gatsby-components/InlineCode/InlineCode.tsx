import React from 'react';
import copyToClipboard from '../../utils/copy-to-clipboard';
import './InlineCode.scss';

class InlineCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  copyToClipBoard = () => {
    copyToClipboard(this.props.children)
      .then(() => {
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 1000);
      })
      .catch(() => false);
  };

  render() {
    const { children } = this.props;
    const { copied } = this.state;

    return (
      <code className="c-inline-code" onClick={this.copyToClipBoard}>
        {children}
        {copied && <span className="c-inline-code__copied">copied</span>}
      </code>
    );
  }
}

export default InlineCode;
