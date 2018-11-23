import * as types from 'constants/actionTypes';

const initialState = {
    isConnected: true,
};

const Network = (state = initialState, action) => {
    switch (action.type) {
        case types.NETWORK_MONITOR_CHECKING:
            return {
                ...state,
                isConnected: action.isConnected,
            };
        default:
        return {
            ...state
        }
  }
}

export default Network;