// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import makeSelectSearchContainer from './selectors';
import { SEARCH_ACTION } from './constants';
import { getQueryFromObj } from '../../utils/urlHelper';
import { GOOGLE_BOOKS_KEY, GOOGLE_BOOK_URL } from '../../utils/constants';
import request from '../../utils/request';
import { setBooksAction, setIsLoadingAction, setEmptyAction } from './actions';

// Individual exports for testing
export function* getBooks() {
  const payload = yield select(makeSelectSearchContainer());
  if (payload === '')
    return yield put(setBooksAction({ totalItems: 0, items: [] }));
  const queryString = getQueryFromObj({
    key: GOOGLE_BOOKS_KEY,
    q: payload,
    projection: 'lite',
  });
  const requestURL = GOOGLE_BOOK_URL + queryString;

  try {
    const bookResponse = yield call(request, requestURL, {});
    yield put(setBooksAction(bookResponse));
    // yield put(setIsLoadingAction(false));
  } catch (err) {
    // yield put(errorAction(err.response));
  }
}
export default function* searchContainerSaga() {
  yield takeLatest(SEARCH_ACTION, getBooks);
}
