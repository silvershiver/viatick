//AppTabbar
import { StyleSheet } from 'react-native';
import * as constants from '../../../constants'

export default StyleSheet.create({
    container: {
        height: 43,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: constants.colors.BORDER_TEXT_INPUT,
        borderRadius: 8,
    },
    textInput: {
        height: '100%',
        flex: 1,
        fontWeight: '300',
        fontSize: 15,
        paddingTop: 0,
        paddingBottom: 0,
    },
    icon: {
        height: 22,
        width: 22,
    },
    touch: {
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
});