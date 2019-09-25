import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_MORE_BOOKS_ACTION } from './constants';
import { selectTotalBooks, selectBooks } from './selectors';
import makeSelectSearchContainer from '../SearchContainer/selectors';
import { GOOGLE_BOOKS_KEY, GOOGLE_BOOK_URL } from '../../utils/constants';
import { getQueryFromObj } from '../../utils/urlHelper';
import request from '../../utils/request';
import { setBooksAction } from '../SearchContainer/actions';

// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

export function* fetchMoreBooks() {
  console.log('Inside fetch more books');
  /* const totalBooks = yield select(selectTotalBooks);
  const fetchedBooks = yield select(selectBooks);
  const searchText = yield select(makeSelectSearchContainer()); */
  const state = yield select();

  const { books: fetchedBooks } = state.bookContainer;
  const { searchText } = state.searchContainer;
  console.log('constructing query string');

  const queryString = getQueryFromObj({
    key: GOOGLE_BOOKS_KEY,
    q: searchText,
    startIndex: fetchedBooks.length,
    projection: 'lite',
  });
  const requestURL = GOOGLE_BOOK_URL + queryString;
  console.log('calling google maps');

  try {
    const bookResponse = yield call(request, requestURL, {});
    yield put(setBooksAction(bookResponse));
  } catch (err) {
    // yield put(errorAction(err.response));
  }
}
export default function* bookContainerSaga() {
  yield takeLatest(FETCH_MORE_BOOKS_ACTION, fetchMoreBooks);
}
