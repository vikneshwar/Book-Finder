/*
 *
 * BookContainer actions
 *
 */

import { DEFAULT_ACTION, FETCH_MORE_BOOKS_ACTION } from './constants';

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
