import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    modalBackground: {
        backgroundColor: '#0000',
        paddingLeft: 35 * constants.dimens.RATIO,
        paddingRight: 35 * constants.dimens.RATIO,
        alignItems: 'stretch',
    },
    modalBackgroundFree: {
        backgroundColor: '#0000',
        paddingLeft: 5 * constants.dimens.RATIO,
        paddingRight: 5 * constants.dimens.RATIO,
    },
    contentFree: {
        alignSelf: 'baseline',
        width: '100%'
    },
    content: {
        width: '100%',
        height: 250 * constants.dimens.RATIO,
    },
    titleBg: {
        backgroundColor: constants.colors.MAIN_COLOR,
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 37,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
    },
    mainContentFree: {
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: '#fff',
    },
    mainContent: {
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: '#fff',
        flex: 1,
    },
    line: {
        backgroundColor: constants.colors.GRAY_LINE,
        height: StyleSheet.hairlineWidth,
        width: '100%',
    },
    clearButton: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearIcon: {
        height: 20,
        width: 20,
    },
    closeTouch: {
        height: 30,
        width: 30,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeImage: {
        height: 10,
        width: 10,
        marginRight: 5,
    }
});