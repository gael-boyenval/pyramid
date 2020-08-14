import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectViewport extends Component {
  handleChange = (event) => {
    this.props.changeViewPort(event.target.value);
  };

  static propTypes = {
    viewPorts: PropTypes.shape({}).isRequired,
    viewport: PropTypes.string,
    changeViewPort: PropTypes.func.isRequired,
  };

  render() {
    const { viewPorts, viewport } = this.props;
    return (
      <div className="c-preview__select-wrapper">
        <select className="c-preview__select" onChange={this.handleChange}>
          <option default={viewport === null} value="auto">
            auto
          </option>
          {Object.keys(viewPorts).map((viewportItem) => (
            <option
              key={viewportItem}
              default={viewportItem === viewport}
              value={viewportItem}
            >
              {viewportItem} : {viewPorts[viewportItem]}
            </option>
          ))}
        </select>

        <svg
          className="c-preview__select-icon"
          viewBox="0 0 20 20"
          vectorEffect="non-scaling-stroke"
        >
          <polyline points="17.9,6.5 10,14.4 2.1,6.5" />
        </svg>
      </div>
    );
  }
}

export default SelectViewport;
