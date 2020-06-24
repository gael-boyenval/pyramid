import React from 'react';
import PopHover from '../src/gatsby-components/PopHover';

export default {
  title: 'components',
};

const Infos = () => (
  <p>
    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
    amet psum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
    amet Lorem ipsum dolor ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
    Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit
  </p>
);

const position = {
  boxSizing: 'border-box',
  position: 'relative',
  paddingTop: '200px',
  paddingLeft: '800px',
  height: '90vh',
  width: '90vw',
};

export const PopHoverStory = () => (
  <>
    <div style={position}>
      <PopHover Infos={Infos}>
        <div style={{ display: 'inline' }}>Hello world</div>
      </PopHover>
    </div>
  </>
);
