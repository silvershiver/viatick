import { StyleSheet, Dimensions } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    container: {
        height: constants.dimens.MAIN_TAB_SIZE,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontWeight: '700',
        fontSize: 15,
        textAlign: 'center',
        color: constants.colors.BLACK_TEXT3,
        width: Dimensions.get('window').width - 100,
    },
    touchClose: {
        position: 'absolute',
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
    },
    imageClose: {
        width: 25,
        height: 25,
    }
});