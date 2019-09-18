/*
 *
 * SearchContainer actions
 *
 */

import { SEARCH_ACTION } from './constants';

export function searchAction(searchText) {
  return {
    type: SEARCH_ACTION,
    payload: searchText,
  };
}
