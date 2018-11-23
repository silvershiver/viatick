import * as types from 'constants/actionTypes';

const initialState = {
    isFetching: false,
    failure: false,
    data: [],
};

export default function province(state = initialState, action) {
    switch (action.type) {
        case types.PROVINCE.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.PROVINCE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.PROVINCE.FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
            };
        default:
            return { ...initialState};
    }
}