import { Dimensions, Platform } from 'react-native';

// See https://mydevice.io/devices/ for device dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XR_WIDTH = 414;
const XR_HEIGHT = 896;


export const isIPhoneX = () => {
    const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

    const result = Platform.OS === 'ios' &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
            (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
            (D_HEIGHT === XR_HEIGHT && D_WIDTH === XR_WIDTH) ||
            (D_HEIGHT === XR_WIDTH && D_WIDTH === XR_HEIGHT))


    return result;
}