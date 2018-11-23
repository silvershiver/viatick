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
    logo: {
        height: 240,
        flex: 1,
        width: '55%',
        marginTop: 20,
    },
    content: {
        flex: 1,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 20,
        alignItems: 'center',
    },
    touch: {
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
        marginTop: 3,
    },
    text1: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '500',
        color: constants.colors.BLACK_TEXT,
        marginTop: 20,
        marginBottom: 30
    },
    text2: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400',
        color: 'white'
    },
    errorText: {
        width: '70%',
        fontSize: 12,
        fontWeight: '300',
        color: constants.colors.MAIN_RED,
        marginTop: 5,
        marginBottom: 20,
        textAlign: 'center'
    },
    button1: {
        width: 295,
        height: 40,
        marginBottom: 10,
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: constants.colors.GRAY_LINE,
        marginBottom: 30,
        marginTop: 20,
    },
    textContainer: {
        height: 48,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 8,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 24,
        backgroundColor:'transparent'
    },
    textInput: {
        color: 'white',
        height: '100%',
        flex: 1,
        fontWeight: '400',
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'center'
    },
});