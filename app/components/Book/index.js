/**
 *
 * Book
 *
 */

import React, { memo } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  card: {
    // display: 'flex',
    // maxHeight: '300px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  bookImageSec: {
    paddingLeft: '10px',
    paddingRight: '10px',
    /* maxWidth: '134px',
    maxHeight: '200px', */
  },
  bookTitle: {
    fontSize: '20px',
  },
  author: {
    fontSize: '16px',
  },
  publisher: {
    fontSize: '16px',
  },
  bookLink: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  buttonAction: {
    marginBottom: '20px',
  },
  imageGrid: {
    maxWidth: '150px',
  },
  cardGrid: {
    maxWidth: '600px',
  },
  bookImage: {
    // boxShadow: '9px 7px 10px 0px rgba(117,117,117,0.82)',
  },
}));

function Book({ book }) {
  const classes = useStyles();
  const { volumeInfo } = book;
  const {
    title,
    imageLinks: { thumbnail },
    authors,
    publisher,
    previewLink,
  } = volumeInfo;

  return (
    <Box boxShadow={20}>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={4} className={classes.imageGrid}>
            <div className={classes.bookImageSec}>
              <Box boxShadow={10}>
                <CardMedia
                  className={classes.bookImage}
                  component="img"
                  alt={title}
                  title={title}
                  image={thumbnail}
                  height="200"
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.detail}>
              <CardContent className={classes.bookInfo}>
                <h3 className={classes.bookTitle}>
                  {title.length > 100 ? `${title.slice(0, 80)}.......` : title}{' '}
                </h3>
                {authors && (
                  <p className={classes.author}>
                    <span>Authors: </span>
                    {authors.join(', ')}
                  </p>
                )}
                <p className={classes.publisher}>{`Published By: ${publisher ||
                  'Unknown'}`}</p>
              </CardContent>
              <CardActions className={classes.buttonAction}>
                <Button
                  variant="contained"
                  href={previewLink}
                  target="blank"
                  className={classes.bookLink}
                >
                  See this book
                </Button>
              </CardActions>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

Book.propTypes = {
  book: PropTypes.object,
};

export default memo(Book);
