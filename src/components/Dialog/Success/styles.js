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
    },
    imageView: { 
        borderColor: constants.colors.GRAY_PLACEHOLDER_TEXT, 
        borderRadius: 7, 
        borderWidth: StyleSheet.hairlineWidth, 
        width: '100%', 
        height: 140 * constants.dimens.RATIO 
    },
    videoView: { 
        marginTop: 15,
        borderColor: constants.colors.GRAY_PLACEHOLDER_TEXT, 
        borderRadius: 7, 
        borderWidth: StyleSheet.hairlineWidth, 
        width: '100%', 
        height: 140 * constants.dimens.RATIO,
        overflow: 'hidden'
    }
}); 