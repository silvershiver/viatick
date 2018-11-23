import * as types from 'constants/actionTypes';

const initialState = {
    isFetching: false,
    failure: false,
    data: null,
};

export default function province(state = initialState, action) {
    switch (action.type) {
        case types.DISTANCE.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.DISTANCE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                failure: false,
                data: action.data,
            };
        case types.DISTANCE.FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
            };
        default:
            return { ...initialState};
    }
}