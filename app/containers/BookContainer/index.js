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
import { selectBooks, selectisLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Book from '../../components/Book';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Loading from '../../components/Loading';
import { Waypoint } from 'react-waypoint';
import { searchAction } from '../SearchContainer/actions';

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
function BookContainer({ books, isLoading }) {
  const classes = useStyles();

  useInjectReducer({ key: 'bookContainer', reducer });
  useInjectSaga({ key: 'bookContainer', saga });

  const fetchMoreBooks = () => {};
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid container spacing={3} className={classes.bookGrid}>
      {books.map((book, index) => (
        <>
          <Book book={book} key={book.id} />
          {index === books.length - 5 && <Waypoint onEnter={fetchMoreBooks} />}
        </>
      ))}
    </Grid>
  );
}

BookContainer.propTypes = {
  books: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: selectisLoading(state),
  books: selectBooks(state),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMoreBooks: searchText => dispatch(searchAction(searchText)),
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
