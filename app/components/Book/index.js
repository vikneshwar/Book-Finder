/**
 *
 * Book
 *
 */

import React, { memo } from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  bookImageSec: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}));

function Book({ book }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.bookImageSec}>
        <CardMedia
          component="img"
          alt={book.volumeInfo.title}
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks.thumbnail}
          height="200"
        />
      </div>
    </Card>
  );
}

Book.propTypes = {};

export default memo(Book);
