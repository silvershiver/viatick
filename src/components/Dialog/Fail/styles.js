import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    
    container: {
        padding: 20,
    },
    titleText: {
        fontSize: 13,
        fontWeight: '400'
    },
    contentText: {
        fontSize: 10,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 8,
        marginBottom: 12,
        color: constants.colors.GRAY_TEXT2
    }
});