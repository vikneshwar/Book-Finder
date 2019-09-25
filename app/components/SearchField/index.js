/**
 *
 * SearchField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  InputBase,
  makeStyles,
  Box,
  IconButton,
  Paper,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchField({ onSearch }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Books"
        inputProps={{ 'aria-label': 'search books' }}
        onChange={event => onSearch(event.target.value)}
        autoFocus
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
