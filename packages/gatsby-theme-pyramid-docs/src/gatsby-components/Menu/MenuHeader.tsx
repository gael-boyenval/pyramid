import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../Search/Search';
import { Link } from 'gatsby';

const Header = styled.div`
  background: #f5f5f5;
  padding: 30px 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const filterCurrentRelease = (githubReleases) =>
  githubReleases.filter((release) => release.node.isCurrent === true);

const MenuHeader = ({ siteTitle }) => (
  <Header>
    <Search />
    <Link to="/">{siteTitle}</Link>{' '}
  </Header>
);

MenuHeader.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default MenuHeader;
