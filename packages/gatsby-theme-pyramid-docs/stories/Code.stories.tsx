import React from 'react';
import Code from '../src/gatsby-components/Code';

export default {
  title: 'components',
};

export const CodeExample = () => (
  <Code>
    <code className="language-js">
      {`var foo = 2;

function baz(a, b) {
  return a + b
}`}
    </code>
  </Code>
);
