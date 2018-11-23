import { GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from '../constants/actionTypes'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import categoryApi from '../apis/categoryApis'

export function* getCategories(action) {
    try {
        const data = yield categoryApi.getCategories
        yield put({ type: GET_CATEGORY_SUCCESS, data })
    } catch (e) {
        yield put({ type: GET_CATEGORY_FAILURE })
    }
}

export function* watchGetCategory() {
    yield* takeLatest(GET_CATEGORY, getCategories)
}
