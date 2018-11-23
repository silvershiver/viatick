import config from "constants/config";
import * as types from 'constants/actionTypes'
import axios from 'axios'
import myAxios from '../apis/myAxios'

export function loginRequest(email, password) {
    return {
        type: types.LOGIN.REQUEST,
        email,
        password,
    }
}

export function loginSuccess(data) {
    return {
        type: types.LOGIN.SUCCESS,
        data,
    }
}

export function loginFailure(error) {
    return {
        type: types.LOGIN.FAILURE,
        error,
    }
}

export function logout() {
    return {
        type: types.LOGOUT,
    }
}

export function login(email, password) {
    return dispatch => {

        dispatch(loginRequest(email, password));

        var body = new FormData();
        body.append("username", email);
        body.append("password", password);

        myAxios.getInstance().post(config.LOGIN, body)
            .then(function (response) {
                console.log(response);
                var loginData = response.data[0]
                if (loginData) {
                    dispatch(loginSuccess(loginData));
                } else {
                    dispatch(loginFailure(null));
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(loginFailure(error));
            });
    };
}
