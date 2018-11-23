import { View, Text, StyleSheet } from 'react-native';
import * as constants from 'constants/index'

// define your styles
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    touch: {
        backgroundColor: constants.colors.MAIN_BG,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 310,
    },
});