import * as types from 'constants/actionTypes';

const initialState = {
    isFetching: false,
    failure: false,
    data: [],
};

export default function district(state = initialState, action) {
    switch (action.type) {
        case types.DISTRICT.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.DISTRICT.SUCCESS:
            return {
                ...state,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.DISTRICT.FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
            };
        default:
            return { ...initialState};
    }
}