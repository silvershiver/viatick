import { StyleSheet } from 'react-native';
import * as constants from 'constants/index'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 45,
        paddingRight: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 13,
        marginBottom: 13,
        marginRight: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },
    info: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },
});