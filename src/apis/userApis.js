import axios from 'axios'

import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* login(email, password) {
    try {
        var data = new FormData();
        data.append("username", email);
        data.append("password", password);

        const apiConfig = {
            method: 'post',
            url: 'http://54.251.177.123/tokodistributor-dev/api-tokdis/mobile/login-access',
            data: data
        };

        const response = yield call(axios, apiConfig);
        console.log(response);
        return response.data[0]
        //return resolve(response)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    login,

};