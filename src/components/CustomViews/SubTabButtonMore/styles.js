import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    container: {
        
    },
    touch: {
        flexDirection: 'row',
        backgroundColor: constants.colors.MAIN_RED,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 3,
    },
    title: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    moreImage: {
        width: 14,
        height: 14,
    },
});