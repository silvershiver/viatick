import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    container: {
        
    },
    touch: {
        backgroundColor: constants.colors.MAIN_RED,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
});