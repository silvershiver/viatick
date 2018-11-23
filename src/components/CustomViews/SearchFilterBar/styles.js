//AppTabbar
import { StyleSheet } from 'react-native';
import * as constants from '../../../constants'

export default StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: constants.colors.GRAY_LINE,
        padding: constants.dimens.CONTENT_SCREEN_PADDING_LEFT_RIGHT,
    },
    viewInput: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 5,
    },
    textInput: {
        height: '100%',
        flex: 1,
        fontWeight: '300',
        fontSize: 12,
        paddingTop: 0,
        paddingBottom: 0,
        textAlignVertical: 'center',
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 5,
    },
});