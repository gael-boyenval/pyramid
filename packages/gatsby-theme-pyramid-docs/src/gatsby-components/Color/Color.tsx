import React from 'react';
import PopHover from '../PopHover';
import ColorInfo from './ColorInfo';
import './Color.scss';

const Color: React.FC<ColorProps> = ({
  colorName,
  rgbVal,
  exVal,
  platforms,
}): JSX.Element => (
  <div className="c-color">
    <PopHover
      Content={() => (
        <ColorInfo
          colorName={colorName}
          rgbVal={rgbVal}
          exVal={exVal}
          platforms={platforms}
        />
      )}
    >
      <div className="c-color__content">
        <div className="c-color__color" style={{ backgroundColor: exVal }} />
        <div className="c-color__label">{colorName}</div>
      </div>
    </PopHover>
  </div>
);

export interface Plateforms {
  [key: string]: string;
}

interface ColorProps {
  colorName: string;
  rgbVal: string;
  exVal: string;
  platforms: Plateforms[];
}

Color.displayName = 'Color';

export default Color;
