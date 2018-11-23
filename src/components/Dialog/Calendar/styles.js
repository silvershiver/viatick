import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: '#0000',
        paddingLeft: 35 * constants.dimens.RATIO,
        paddingRight: 35 * constants.dimens.RATIO,
        paddingTop: 160 * constants.dimens.RATIO,
        paddingBottom: 210 * constants.dimens.RATIO,
        alignItems: 'stretch',
    },
    content: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 7,
    },
    titleBg: {
        backgroundColor: constants.colors.MAIN_RED,
        alignItems: 'center',
        justifyContent: 'center',
        height: 37,
        padding: 10,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    mainContent: {
        flex: 1,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    editText: {
        marginLeft: 15,
        height: 32,
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    autocompleteTextInput: {
        height: 44,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: constants.colors.BORDER_TEXT_INPUT,
        fontWeight: "300",
        fontSize: 11
    },
    autocompleteItemList: {
        height: 34,
    },
    autocompleteTextItem: {
        flex: 1,
        fontWeight: "300",
        fontSize: 11,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        color: constants.colors.GRAY_TEXT2,
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
    }
});