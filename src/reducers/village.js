import * as types from 'constants/actionTypes';

const initialState = {
    isFetching: false,
    failure: false,
    data: [],
};

export default function village(state = initialState, action) {
    switch (action.type) {
        case types.VILLAGE.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.VILLAGE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.VILLAGE.FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
            };
        default:
            return { ...initialState};
    }
}