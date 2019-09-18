import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the bookContainer state domain
 */

const selectBookContainerDomain = state => state.bookContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BookContainer
 */

const makeSelectBookContainer = () =>
  createSelector(
    selectBookContainerDomain,
    substate => substate,
  );

export default makeSelectBookContainer;
export { selectBookContainerDomain };
