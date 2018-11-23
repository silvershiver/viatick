import * as actionTypes from 'constants/actionTypes';

export function fetchData(email, password) {
    return {
        type: actionTypes.FETCHING_DATA,
        email,
        password,
    }
}