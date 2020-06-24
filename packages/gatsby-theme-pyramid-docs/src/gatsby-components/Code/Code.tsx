import React, { useState, ReactNode, ReactChild } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import copyToClipboard from '../../utils/copy-to-clipboard';
import './Code.scss';

/* TODO */
//  - POC : allow code highlight ? with line selections [[2,12], [18,24]]

const RE = /{([\d,-]+)}/;

type shouldHighlightLine = (n: number) => boolean;

const calculateLinesToHighlight = (lines: string): shouldHighlightLine => {
  if (!RE.test(lines)) {
    return () => false;
  } else {
    const lineNumbers = RE.exec(lines)[1]
      .split(',')
      .map((v) => v.split('-').map((v) => parseInt(v, 10)));
    return (index) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      );
      return inRange;
    };
  }
};

const copyToClipboardClick = (str: string, toogleCopy) => {
  copyToClipboard(str)
    .then(() => {
      toogleCopy(true);
      setTimeout(() => toogleCopy(false), 3000);
    })
    .catch(() => false);
};

interface CodeHilightProps {
  code: string;
  language: Language;
  lines: string;
}

const CodeHilight: React.FC<CodeHilightProps> = ({
  code,
  language,
  lines,
}: CodeHilightProps) => {
  const shouldHighlightLine = calculateLinesToHighlight(lines);
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={null}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} c-code__pre`}>
          <code className={`${className} c-code__code-block`}>
            {tokens.map((line, i) => {
              const props = getLineProps({ line, key: i });

              props.className = `${
                props.className
              } c-code__line c-code__line--numbered ${
                shouldHighlightLine(i + 1) ? `c-code__line--highlight` : ''
              }`;
              props.ln = i + 1;

              return (
                <div {...props}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

/*
 * MDX passes the code block as JSX
 * we un-wind it a bit to get the string content
 * but keep it extensible so it can be used with just children (string) and className
 */

const Code = ({ children }) => {
  const { className, lines, filename } = children.props;
  const [copied, setCopied] = useState(false);

  const language: Language = className
    ? className.split(`language-`).pop().toLowerCase()
    : '';

  const content =
    children.props && children.props.children
      ? children.props.children
      : children;

  return (
    <div className="c-code">
      {filename && <div className="c-code__file-name">{filename}</div>}
      <div className="c-code__wrapper">
        {content && (
          <CodeHilight code={content} language={language} lines={lines} />
        )}
        <button
          className="c-code__copy-btn"
          onClick={() => {
            copyToClipboardClick(content, setCopied);
          }}
        >
          {copied ? 'copied' : 'copy code'}
        </button>
      </div>
    </div>
  );
};

export default Code;
