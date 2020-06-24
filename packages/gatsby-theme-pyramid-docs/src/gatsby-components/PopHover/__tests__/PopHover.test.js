import React from 'react';
import renderer from 'react-test-renderer';
import PopHover from '../PopHover';

test('<PopHover />', () => {
  const tree = renderer.create(<PopHover />).toJSON();
  expect(tree).toMatchSnapshot();
});
