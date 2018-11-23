import {
    GET_PRODUCT_DETAIL
} from '../constants/actionTypes'

const initialState = {
    product: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }
}