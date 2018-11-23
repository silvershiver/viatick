import { StyleSheet } from 'react-native';
import * as constants from '../../../constants'

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 5,
    },
    footer: {
        width: '100%',
        height: 5,
    },
    container: {
        flex: 1,
    },
    containerTouch: {
        flex: 1,
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 15,
    },
    name: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 12,
        marginRight: 5,
        color: constants.colors.GRAY_TEXT,
    },
    noti: {
        flex: 1,
        fontSize: 15,
        fontWeight: '400',
        marginRight: 5,
        color: constants.colors.MAIN_RED,
    },
    moreImage: {
        width: 11,
        height:11,
        marginRight: 20,
    },
    line: {
        height: 1,
        backgroundColor: constants.colors.GRAY_LINE,
    },
});