/*
 *
 * BookContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_MORE_BOOKS_ACTION,
  IS_LOADING_MORE_BOOKS_ACTION,
  ADD_MORE_BOOKS_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchMoreBooksAction() {
  return {
    type: FETCH_MORE_BOOKS_ACTION,
  };
}

export function addMoreBooksAction(bookResponse) {
  return {
    type: ADD_MORE_BOOKS_ACTION,
    payload: bookResponse,
  };
}

export function isLoadingMoreBooksAction() {
  return {
    type: IS_LOADING_MORE_BOOKS_ACTION,
  };
}
