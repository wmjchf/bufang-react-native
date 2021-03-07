import {Dimensions} from 'react-native';
import {INITGLOBALWIDTH, INITGLOBALHEIGHT} from './action-types';

export const initGlobal = () => {
  return (dispatch) => {
    dispatch(initGlobalWidth());
    dispatch(initGlobalHeight());
  };
};
export const initGlobalWidth = () => {
  const {width} = Dimensions.get('window');
  return {
    type: INITGLOBALWIDTH,
    width,
  };
};
export const initGlobalHeight = () => {
  const {height} = Dimensions.get('window');
  return {
    type: INITGLOBALHEIGHT,

    height: height,
  };
};
