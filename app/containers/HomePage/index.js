/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import SearchContainer from '../SearchContainer/index';
import BookContainer from '../BookContainer/index';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '64px',
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
  },
}));
export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searcRoot}>
        <SearchContainer />
      </div>
      <div className={classes.bookRoot}>
        <BookContainer />
      </div>
    </div>
  );
}
