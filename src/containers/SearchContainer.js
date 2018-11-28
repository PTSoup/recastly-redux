import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
