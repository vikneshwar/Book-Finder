/**
 *
 * SearchContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import makeSelectSearchContainer from './selectors';
import reducer from './reducer';
import SearchField from '../../components/SearchField';
import { searchAction } from './actions';
import saga from './saga';

export function SearchContainer({ handleSearch }) {
  useInjectReducer({ key: 'searchContainer', reducer });
  useInjectSaga({ key: 'searchContainer', saga });

  return <SearchField onSearch={handleSearch} />;
}

SearchContainer.propTypes = {
  handleSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchContainer: makeSelectSearchContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSearch: searchText => dispatch(searchAction(searchText)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchContainer);
