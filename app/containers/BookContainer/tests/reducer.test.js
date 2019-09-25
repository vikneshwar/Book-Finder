import bookContainerReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('bookContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(bookContainerReducer(undefined, {})).toEqual(expectedResult);
  });
});
