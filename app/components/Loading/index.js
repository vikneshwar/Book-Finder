/**
 *
 * Loading
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  progressRoot: {
    color: '#ffffff',
  },
}));
function Loading() {
  const classes = useStyles();

  return (
    <CircularProgress
      size={60}
      thickness={5}
      classes={{
        root: classes.progressRoot,
      }}
    />
  );
}

Loading.propTypes = {};

export default Loading;
