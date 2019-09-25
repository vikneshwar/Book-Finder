/*
 *
 * SearchContainer actions
 *
 */

import {
  SEARCH_ACTION,
  SET_BOOKS_ACTION,
  SET_IS_LOADING_ACTION,
  SET_EMPTY_ACTION,
} from './constants';

export function searchAction(searchText) {
  return {
    type: SEARCH_ACTION,
    payload: searchText,
  };
}

export function setBooksAction(bookResponse) {
  return {
    type: SET_BOOKS_ACTION,
    payload: bookResponse,
  };
}

export function setEmptyAction() {
  return {
    type: SET_EMPTY_ACTION,
  };
}

export function setIsLoadingAction(isLoading) {
  return {
    type: SET_IS_LOADING_ACTION,
    payload: isLoading,
  };
}
