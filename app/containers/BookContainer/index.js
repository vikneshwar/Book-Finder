/**
 *
 * BookContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  selectBooks,
  selectisLoading,
  shouldFetchMoreBooks,
  selectIsLoadingMoreBooks,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Book from '../../components/Book';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Loading from '../../components/Loading';
import { Waypoint } from 'react-waypoint';
import { fetchMoreBooksAction } from './actions';

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
  cardGrid: {
    maxWidth: '600px',
  },
}));
function BookContainer({
  books,
  isLoading,
  shouldRenderWaypoint,
  fetchMoreBooks,
  isMoreBooksLoading,
}) {
  const classes = useStyles();

  useInjectReducer({ key: 'bookContainer', reducer });
  useInjectSaga({ key: 'bookContainer', saga });

  // const fetchMoreBooks = () => {};
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid container spacing={3} className={classes.bookGrid}>
      {books.map((book, index) => (
        <Grid item key={book.etag} xs={12} md={6} className={classes.cardGrid}>
          <Book book={book} />
        </Grid>
      ))}
      {shouldRenderWaypoint && (
        <Waypoint threshold={2.0} onEnter={() => fetchMoreBooks()} />
      )}
      {isMoreBooksLoading && <Loading />}
    </Grid>
  );
}

BookContainer.propTypes = {
  books: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchMoreBooks: PropTypes.func,
  isMoreBooksLoading: PropTypes.bool,
  shouldRenderWaypoint: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: selectisLoading(state),
  books: selectBooks(state),
  shouldRenderWaypoint: shouldFetchMoreBooks(state),
  isMoreBooksLoading: selectIsLoadingMoreBooks(state),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMoreBooks: () => dispatch(fetchMoreBooksAction()),
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
