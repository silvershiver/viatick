import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#0000'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#0000',
        height: 50,
        width: 50,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});