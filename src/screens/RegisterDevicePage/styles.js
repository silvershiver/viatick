import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

const mainWidth = 150

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.colors.MAIN_BG,
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    device: {
        flex: 1,
        width: '100%',
    },
    content: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content2: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    textContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },
    text1: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    text2: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        marginTop: 5,
    },
});