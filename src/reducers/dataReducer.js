import * as actionTypes from 'constants/actionTypes';
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCHING_DATA:
      return {
        ...state,
        data: {},
        isFetching: true
      }
    case actionTypes.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case actionTypes.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return { 
        ...state
      }
  }
}
