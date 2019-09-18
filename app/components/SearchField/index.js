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

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
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
        inputProps={{ 'aria-label': 'search google maps' }}
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
