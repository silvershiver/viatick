//AppTabbar
import { StyleSheet } from 'react-native';
import * as constants from '../../../constants'

export default StyleSheet.create({
    container: {
        height: 32,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 0,
        marginLeft: 15, 
        marginTop: 15,
    },
    viewInput: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: constants.dimens.BORDER_RADIUS,
        borderBottomLeftRadius: constants.dimens.BORDER_RADIUS,
    },
    textInput: {
        height: '100%',
        flex: 1,
        fontWeight: '300',
        fontSize: 12,
        paddingTop: 0,
        paddingBottom: 0,
    },
    icon: {
        height: 25,
        width: 25,
        marginLeft: 5,
        marginRight: 5,
    },
    searchButton: {
        width: 60,
        backgroundColor: constants.colors.BLACK_SEARCH_BUTTON,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: constants.dimens.BORDER_RADIUS,
        borderBottomRightRadius: constants.dimens.BORDER_RADIUS,
    },
    searchText: {
        color: 'white',
        fontSize: 11,
    },
});