import { StyleSheet } from 'react-native';
import colors from './colors'

module.exports = StyleSheet.create({
    TEXTINPUT1: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        color: colors.BLACK_TEXT,
        borderColor: colors.BORDER_TEXT_INPUT,
        fontWeight: "300",
        fontSize: 14,
        borderRadius: 8,
    },
    LABEL_REGISTER: {
        height: 20,
        alignSelf: 'stretch',
        marginBottom: 0,
        fontSize: 12,
        fontWeight: "300" //https://gist.github.com/knowbody/c5cdf26073b874eae86ba96e7cf3a540
    },
    APP_FONT: {
        fontWeight: '300', //Light
        fontSize: 10
    },
    APP_FONT_REGULAR: {
        fontWeight: '400', //Regular
        fontSize: 10
    },
    APP_FONT_SEMIBOLD: {
        fontWeight: '600', //Light
        fontSize: 10
    },
    BULLET_RED: {
        width: 8,
        height: 8,
        borderRadius: 4,
        borderColor: colors.GRAY_LINE,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.MAIN_RED,
    },
    BULLET_WHITE: {
        width: 8,
        height: 8,
        borderRadius: 4,
        borderColor: colors.DARKGRAY,
        borderWidth: StyleSheet.hairlineWidth,
        //backgroundColor: colors.MAIN_RED,
    },
    BULLET_RED_SMALL: {
        width: 7,
        height: 7,
        borderRadius: 4,
        borderColor: colors.GRAY_LINE,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.MAIN_RED,
    },
    BULLET_WHITE_SMALL: {
        width: 7,
        height: 7,
        borderRadius: 4,
        borderColor: colors.GRAY_LINE,
        borderWidth: StyleSheet.hairlineWidth,
    },
    BULLET_RED_BIG: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: colors.GRAY_LINE,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.MAIN_RED,
    },
    BULLET_WHITE_BIG: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: colors.GRAY_LINE,
        borderWidth: StyleSheet.hairlineWidth,
    },
    SHADOW_LINE: {
        width: '100%',
        height: 2,
        position: 'absolute',
        backgroundColor: '#00000066'
    },

    HOME_TITLE: {
        fontWeight: '300',
        fontSize: 18,
        color: 'black',
        width: '100%',
    },

    SEARCH_FIELD_TITLE: {
        fontWeight: '400',
        fontSize: 16,
        color: colors.BLACK_TEXT1,
    },
    APP_TEXTINPUT: {
        height: 43,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: colors.BORDER_TEXT_INPUT,
        fontWeight: "300",
        fontSize: 14,
    },
    APP_TEXTINPUT_2: {
        height: 180,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: colors.BORDER_TEXT_INPUT,
        fontWeight: "300",
        fontSize: 14,
    },

    MAIN_LINE: {
        width: '100%',
        height: 1,
        backgroundColor: colors.GRAY_LINE
    },

})
