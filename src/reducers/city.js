import * as types from 'constants/actionTypes';

const initialState = {
    isFetching: false,
    failure: false,
    data: [],
};

export default function city(state = initialState, action) {
    switch (action.type) {
        case types.CITY.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.CITY.SUCCESS:
            return {
                ...state,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.CITY.FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
            };
        default:
            return { ...initialState};
    }
}