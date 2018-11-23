import * as actionTypes from 'constants/actionTypes';
//import RNFetchBlob from 'react-native-fetch-blob';

export const connectionState = (status) => {
    return { 
        type: actionTypes.NETWORK_MONITOR_CHECKING, 
        isConnected: status 
    }
};

// export function networkChecking(connected, connectionType, effectiveType) {
//     return {
//         type: actionTypes.NETWORK_MONITOR_CHECKING,
//         connected,
//         connectionType,
//         effectiveType
//     }
// }

// export function checkNetwork(connected, connectionType, effectiveType) {
//     return dispatch => {

//         dispatch(networkChecking(connected, connectionType, effectiveType));

//         RNFetchBlob.fetch('GET', 'https://google.com')
//         .then(() => {
//             dispatch(networkChecking(true, connectionType, effectiveType));
//         })
//         .catch(err => {
//             console.log(err.message)
//             dispatch(networkChecking(false, connectionType, effectiveType));
//         })

//     };
// }
