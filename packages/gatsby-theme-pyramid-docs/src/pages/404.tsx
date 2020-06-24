import React from 'react';
//import Layout from '../gatsby-components/layout'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;

String.prototype.dup = function (n) {
  return new Array(n).fill(this).reduce((n, t) => n + ' ' + t);
};

const dup = (str, n) => (n) =>
  new Array(n).fill(this).reduce((n, t) => n + ' ' + t);
