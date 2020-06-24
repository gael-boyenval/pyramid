import React, { Component } from 'react';
import { Link } from 'gatsby';

import './Search.scss';

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div className="c-search__result" key={i}>
            <Link to={page.url} className="link">
              <div className="c-search__url">{page.url}</div>
              <h3 className="c-search__title">{page.title}</h3>
              <div className="c-search__desc">{page.description}</div>
            </Link>
          </div>
        ));
      } else if (this.state.query.length > 3) {
        return (
          <div className="c-search__result">
            <div className="c-search__error">
              No results for {this.state.query}
            </div>
          </div>
        );
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return (
          <div className="c-search__result">
            <div className="c-search__error">
              Please insert at least 3 characters
            </div>
          </div>
        );
      } else {
        return '';
      }
    };

    return (
      <div className="c-search">
        <button className="c-search__close-btn" onClick={this.props.close}>
          <svg
            className="c-search__close-icon"
            viewBox="0 0 20 20"
            vectorEffect="non-scalling-stroke"
          >
            <line x1="3.1" y1="3.1" x2="16.9" y2="16.9" />
            <line x1="3.1" y1="16.9" x2="16.9" y2="3.1" />
          </svg>
          FERMER
        </button>

        <div className="c-search__input-wrapper">
          <svg
            className="c-search__icon-search"
            viewBox="0 0 20 20"
            vectorEffect="non-scalling-stroke"
          >
            <line x1="13.9" y1="13.9" x2="17.8" y2="17.8" />
            <circle cx="8.3" cy="8.1" r="5.4" />
          </svg>

          <input
            className="c-search__input"
            type="text"
            onChange={this.search}
            placeholder={'Search'}
            autofocus
          />
        </div>

        <div className="c-search__results">
          <ResultList />
        </div>
      </div>
    );
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index;
    var store = window.__FLEXSEARCH__.en.store;
    if (!query || !index) {
      return [];
    } else {
      var results = [];

      // search the indexed fields
      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query));
      });

      // find the unique ids of the nodes
      results = Array.from(new Set(results));
      // return the corresponding nodes in the store
      // filter code, design and specs pages
      var nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .filter(
          (page) =>
            page.node.title !== 'code' &&
            page.node.title !== 'Code' &&
            page.node.title !== 'Design' &&
            page.node.title !== 'design' &&
            page.node.title !== 'specs' &&
            page.node.title !== 'Specs',
        )
        .map((node) => node.node);

      return nodes;
    }
  }

  search = (event) => {
    const query = event.target.value;
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query);
      this.setState({ results: results, query: query });
    } else {
      this.setState({ results: [], query: query });
    }
  };
}

export default Search;
