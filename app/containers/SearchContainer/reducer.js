/*
 *
 * SearchContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SEARCH_ACTION } from './constants';

export const initialState = {
  searchText: '',
};

/* eslint-disable default-case, no-param-reassign */
const searchContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_ACTION:
        draft.searchText = action.payload;
        break;
    }
  });

export default searchContainerReducer;
