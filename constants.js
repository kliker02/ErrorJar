import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const Width = win.width;
export const Height = win.height;

export const ORIENTATION_LANDSCAPE = 'landscape';
export const ORIENTATION_PORTRAIT = 'portrait';
