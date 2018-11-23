import * as types from 'constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    failure: false,
    data: {},
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN.REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                isFetching: true,
            };
        case types.LOGIN.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.LOGIN.FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                isFetching: false,
                failure: true,
            };
        case types.LOGOUT:
            return { ...initialState }
        default:
            return {
                ...state
            };
    }
}