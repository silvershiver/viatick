import { fork } from 'redux-saga/effects';
import { watchGetCategory } from './category'
import { watchLoginRequest } from './login'

export default function* root() {
    yield [
        fork(watchGetCategory),
        fork(watchLoginRequest),
    ];
}