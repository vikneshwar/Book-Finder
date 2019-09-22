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
/**
 * Default selector used by BookContainer
 */

const makeSelectBookContainer = () =>
  createSelector(
    selectBookContainerDomain,
    substate => substate.books,
  );

export default makeSelectBookContainer;
export { selectisLoading, selectBooks };
