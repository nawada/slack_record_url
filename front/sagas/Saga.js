import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import { tableData, FETCH_TABLE_DATA, APPLY_FETCH_TABLE_DATA } from '../actions/Actions';

function fetchTableData() {
  let response = {};
  return fetch('/api/v1/infos', {}).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return {status: 'error', errorType: res.status + ' ' + res.statusText, payload: response};
    }
  }).then(responseJson => {
    if (responseJson.status === 'error') {
      return {error: responseJson};
    } else {
      return {payload: responseJson};
    }
  });
}

function* fetchTableDataAsync() {
  const {payload, error} = yield call(fetchTableData);
  if (payload && !error) {
    yield put(tableData(APPLY_FETCH_TABLE_DATA, payload));
  }
}

export default function* rootSaga() {
  yield fork(function*() {
    yield* takeEvery(FETCH_TABLE_DATA, fetchTableDataAsync);
  });
}