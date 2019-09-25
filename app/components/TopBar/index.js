/**
 *
 * TopBar
 *
 */

import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import PublicOutlined from '@material-ui/icons/PublicOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: '0px',
    width: '100%',
    zIndex: '999999',
  },
  title: {
    flexGrow: 1,
    marginLeft: '20px',
  },

  loginButton: {},
  signupButton: {
    marginLeft: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  avatar: {
    margin: '30px',
    backgroundColor: theme.palette.secondary.main,
  },
  productTitle: {
    textDecoration: 'none',
    color: 'white',
  },
  appBar: {
    background: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CollectionsBookmarkIcon fontSize="large" />
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.productTitle}>
              Book Finder
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {};

export default memo(TopBar);
