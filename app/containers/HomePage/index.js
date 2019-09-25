/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchContainer from '../SearchContainer/index';
import BookContainer from '../BookContainer/index';
import ScrollToTop from '../../components/ScrollToTop';

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
  scrollFab: {
    background: 'linear-gradient(to bottom, #396afc, #2948ff)',
  },
  upArrow: {
    color: '#ffffff',
  },
}));
export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* place holder div to scroll */}
      <div id="scroll-anchor" />
      <div className={classes.searcRoot}>
        <SearchContainer />
      </div>
      <div className={classes.bookRoot}>
        <BookContainer />
      </div>
      <ScrollToTop {...props}>
        <Fab
          className={classes.scrollFab}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon className={classes.upArrow} />
        </Fab>
      </ScrollToTop>
    </div>
  );
}
