import React from 'react';
import './ColorInfos.scss';

import InlineCode from '../InlineCode';

import { Plateforms } from './Color';
import copyToClipboard from '../../utils/copy-to-clipboard';

const ColorInfo: React.FC<ColorProps> = ({
  colorName,
  rgbVal,
  exVal,
  platforms,
}): JSX.Element => (
  <>
    <div className="c-color-infos__tips-header">
      <div className="c-color-infos__title">{colorName}</div>
      <div className="c-color-infos__values">
        <div className="c-color-infos__values-items">{exVal}</div>
        <div className="c-color-infos__values-items">{rgbVal}</div>
      </div>
    </div>

    {Object.keys(platforms).map((platform) => (
      <div key={platform} className="c-color-infos__platforms">
        <span className="c-color-infos__platform-name">{platform}</span>
        <InlineCode>{platforms[platform]}</InlineCode>
      </div>
    ))}
  </>
);

interface ColorProps {
  colorName: string;
  rgbVal: string;
  exVal: string;
  platforms: Plateforms[];
}

export default ColorInfo;
