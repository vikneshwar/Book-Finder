/**
 *
 * BookContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBookContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BookContainer() {
  useInjectReducer({ key: 'bookContainer', reducer });
  useInjectSaga({ key: 'bookContainer', saga });

  return <div />;
}

BookContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookContainer: makeSelectBookContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BookContainer);
