import {
    GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE
} from '../constants/actionTypes'

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                isFetching: true
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                date: action.data
            }
        case GET_CATEGORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}