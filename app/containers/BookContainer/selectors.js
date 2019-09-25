import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { initialState as searchInitialState } from './reducer';
/**
 * Direct selector to the bookContainer state domain
 */

const selectBookContainerDomain = state => state.bookContainer || initialState;
const selectSearchContainerDomain = state =>
  state.searchContainer || searchInitialState;

/**
 * Other specific selectors
 */

const selectBooks = state => selectBookContainerDomain(state).books;
const selectisLoading = state => selectSearchContainerDomain(state).isLoading;
const shouldFetchMoreBooks = state => {
  const totalBooksFetched = selectBooks(state);
  const totalBooksinGoogle = selectTotalBooks(state);
  const isLoadingMoreBooks = selectIsLoadingMoreBooks(state);
  return totalBooksinGoogle > totalBooksFetched.length && !isLoadingMoreBooks;
};

const selectTotalBooks = state => selectBookContainerDomain(state).totalBooks;
const selectIsLoadingMoreBooks = state =>
  selectBookContainerDomain(state).isLoadingMoreBooks;
/**
 * Default selector used by BookContainer
 */

const makeSelectBookContainer = () =>
  createSelector(
    selectBookContainerDomain,
    substate => substate.books,
  );

export default makeSelectBookContainer;
export {
  selectisLoading,
  selectBooks,
  shouldFetchMoreBooks,
  selectTotalBooks,
  selectIsLoadingMoreBooks,
};
