/**
 *
 * Tests for BookContainer
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { BookContainer } from '../index';

describe('<BookContainer />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<BookContainer dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<BookContainer />);
    expect(firstChild).toMatchSnapshot();
  });
});
