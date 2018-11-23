import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: constants.dimens.BORDER_RADIUS,
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        borderColor: constants.colors.BORDER_TEXT_INPUT,
        borderWidth: 1,
    },
    containerTouch: {
        height: constants.dimens.TEXT_HEIGHT,
        alignItems: 'center',
        width: '100%',
        paddingLeft: 15,
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontWeight: '300',
        fontSize: 14,
        color: constants.colors.BLACK_TEXT1,
    },
    titleGray: {
        flex: 1,
        fontWeight: '300',
        fontSize: 14,
        color: constants.colors.GRAY_PLACEHOLDER_TEXT,
    },
    iconFlight: {
        width: 24,
        height: 24,
        marginRight: 7,
    }
});