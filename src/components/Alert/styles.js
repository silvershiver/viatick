import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    modalBackground: {
        backgroundColor: '#0000',
        paddingLeft: 40 * constants.dimens.RATIO,
        paddingRight: 40 * constants.dimens.RATIO,
        alignItems: 'stretch',
    },
    modalBackgroundFree: {
        backgroundColor: '#0000',
        paddingLeft: 15 * constants.dimens.RATIO,
        paddingRight: 15 * constants.dimens.RATIO,
    },
    contentFree: {
        alignSelf: 'baseline',
        width: '100%'
    },
    content: {
        width: '100%',
        height: 250 * constants.dimens.RATIO,
    },
    titleText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    mainContentFree: {
        borderRadius: 4,
        backgroundColor: '#42BFFD',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    mainContent: {
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: '#fff',
        flex: 1,
    },
    closeTouch: {
        height: 38,
        width: 91,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },
});