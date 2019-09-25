/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/styles';
import reducer from './reducer';
import { SearchContainer } from '../SearchContainer';
import BookContainer from '../BookContainer';
import Toast from '../../components/Toast';
import { isErrorInApp } from './selectors';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  searcRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
  bookRoot: {
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export function HomePage({ isError }) {
  useInjectReducer({ key: 'homePage', reducer });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searcRoot}>
        <SearchContainer />
      </div>
      <div className={classes.bookRoot}>
        <BookContainer />
      </div>
      {isError && <Toast />}
    </div>
  );
}

HomePage.propTypes = {
  isError: PropTypes.bool,
};

const mapStateToProps = state => ({
  isError: isErrorInApp(state),
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
)(HomePage);
