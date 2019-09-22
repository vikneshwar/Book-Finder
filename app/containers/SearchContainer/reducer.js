/*
 *
 * SearchContainer reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SEARCH_ACTION,
  SET_IS_LOADING_ACTION,
} from './constants';

export const initialState = {
  searchText: '',
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const searchContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_ACTION:
        draft.searchText = action.payload;
        draft.isLoading = !!action.payload;
        break;
      case SET_IS_LOADING_ACTION:
        draft.isLoading = action.payload;
        break;
    }
  });

export default searchContainerReducer;
