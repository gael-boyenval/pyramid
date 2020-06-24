import React, { PureComponent } from 'react';

import copyToClipBoard from '../../utils/copy-to-clipboard';
import './tableofcontents.scss';

export default class TableOfContents extends PureComponent {
  scroller = ({ hash }) => {
    hash = hash.replace('#', '');
    hash = decodeURIComponent(hash);
    const clientRects = document
      .querySelector(`[id="${hash}"]`)
      .getBoundingClientRect();
    const offset = 84 + 48;
    const scrollingElem = document.getElementById('scroller');
    scrollingElem.scrollTop = clientRects.y + scrollingElem.scrollTop - offset;
  };

  onClick = (e) => {
    e.preventDefault();
    const {
      target: { hash },
    } = e;
    this.scroller({ hash });
    return false;
  };

  componentDidMount() {
    const hash = window.location.href.match(/#[\w-_]+$/);
    if (hash) {
      setTimeout(() => {
        this.scroller({ hash: hash[0] });
      }, 800);
    }

    document.querySelectorAll('.anchor-toc').forEach((elem) => {
      elem.title = 'Click to copy the link';
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipBoard(e.currentTarget.href);
      });
    });
  }

  renderList = (list) =>
    list.map((elem, index) => {
      let { url, title, items } = elem;
      if (items) {
        items = (
          <ul className="c-toc__list" key={'group_' + index}>
            {this.renderList(items)}
          </ul>
        );
      }

      // parsing the {#id} (optional)
      let anchor = false;
      if (title) {
        title = title.replace(/\{#([\w-]+)\}$/, (_, capture) => {
          url = '#' + capture;
          return '';
        });
        title = title.trim();
        anchor = (
          <a className="c-toc__list-link" onClick={this.onClick} href={url}>
            {title}
          </a>
        );
      }
      return (
        <li className="c-toc__list-item" key={url + '_link_' + index}>
          {anchor}
          {items}
        </li>
      );
    });

  render() {
    const { tableOfContents = {}, className = '' } = this.props;

    if (!tableOfContents.items) {
      return false;
    }

    return (
      <aside className={`${className} c-toc`} id="toc">
        <div className="c-toc__wrapper">
          <h2 className="c-toc__title">Table of content</h2>

          <div className="c-toc__lists-wrapper">
            <ul className="c-toc__list">
              {this.renderList(tableOfContents.items)}
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}
