import * as actionTypes from 'constants/actionTypes';
import * as types from 'constants/actionTypes';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import categoryApis from '../apis/categoryApis'
import userApis from '../apis/userApis'

function* callLogin (action) {
  try {
    const { email, password } = action
    const data = yield userApis.login(email, password)
    yield put({ type: actionTypes.LOGIN.SUCCESS, data })
  } catch (e) {
    yield put({ type: actionTypes.LOGIN.FAILURE })
  }
}

export function* watchLoginRequest () {
  yield takeLatest(actionTypes.LOGIN.REQUEST, callLogin)
}
