//AppTabbar
import { StyleSheet } from 'react-native';
import * as constants from '../../../constants'

export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: constants.colors.MAIN_RED,
    },
    container1: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    seperate_line: {
        marginTop: 3,
        marginBottom: 2,
        width: 0.5,
        backgroundColor: 'white'
    },
    iPhoneXBottomView: {
        width: '100%',
        height: 15,
    },
});