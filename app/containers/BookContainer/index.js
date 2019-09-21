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
import Book from '../../components/Book';
import { flexbox } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flexbox',
    flexDirection: 'row',
  },
  bookGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
}));
function BookContainer({ books }) {
  const classes = useStyles();

  useInjectReducer({ key: 'bookContainer', reducer });
  useInjectSaga({ key: 'bookContainer', saga });

  return (
    <Grid container spacing={3} className={classes.bookGrid}>
      {books.map(book => (
        <Book book={book} key={book.id} />
      ))}
    </Grid>
  );
}

BookContainer.propTypes = {
  books: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  books: makeSelectBookContainer(),
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
