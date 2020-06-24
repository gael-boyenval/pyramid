import React from 'react';
import styled, { css } from 'styled-components';

/*
import {
  ColorInfo100,
  ColorInfo500,
  ColorInfo700,
  ColorWarning100,
  ColorWarning500,
  ColorWarning700,
  ColorGrey100,
  ColorGrey500,
  ColorGrey700,
} from '@mozaic-ds/tokens/build/js/tokens' */

const defaultTitles = {
  info: 'Information',
  warning: 'Warning',
  tips: 'Useful tip',
};

const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem 1.5rem 2rem;

  ${({ theme }) =>
    theme === 'info'
      ? css`
          background-color: #f5f5f5;
          border-left: solid 8px #ccc;
        `
      : theme === 'warning'
      ? css`
          background-color: pink;
          border-left: solid 8px red;
        `
      : theme === 'tips' &&
        css`
          background-color: lightblue;
          border-left: solid 8px deepskyblue;
        `}
`;

export const Theme = styled.div`
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  ${({ theme }) =>
    theme === 'info'
      ? css`
          color: #999;
        `
      : theme === 'warning'
      ? css`
          color: orange;
        `
      : theme === 'tips' &&
        css`
          color: blue;
        `}
`;

const Content = styled.div`
  margin-top: 0.5rem;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5em;

    ${({ theme }) =>
      theme === 'info'
        ? css`
            color: #999;
          `
        : theme === 'warning'
        ? css`
            color: orange;
          `
        : theme === 'tips' &&
          css`
            color: blue;
          `}
  }
`;

const Highlight = ({ children, theme = 'info', title }) => (
  <Container theme={theme}>
    <Theme theme={theme}>{title || defaultTitles[theme]}</Theme>
    <Content theme={theme}>{children}</Content>
  </Container>
);

export default Highlight;
