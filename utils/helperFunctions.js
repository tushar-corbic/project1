import {Dimensions,Platform} from 'react-native';

export const windowWidth =(part)=>{
    return part * Dimensions.get("window").width;
}
export const windowHeight = (part)=>{
    return part * Dimensions.get("window").height;
}

const Screen = Dimensions.get('window');
export const SCREEN_WIDTH = Screen.width;
export const SCREEN_HEIGHT = Screen.height;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isMWeb = Platform.OS === 'web';

export const logErrorWithMessage = (message, errorSource) => {
  if (__DEV__) {
    console.log(message, errorSource);
  }
};