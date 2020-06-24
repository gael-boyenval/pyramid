import React from 'react';
import Header from '../src/gatsby-components/Header/Header';
import { siteMapData } from '../__stubs__/siteMapData';

export default {
  title: 'components',
};

const props = {
  dsName: 'Pyramid',
  version: 'v1.14.21',
  siteMapData,
};

export const HeaderExample = () => <Header {...props} />;
