import {StyleProp, ViewStyle} from 'react-native';

import component from './Icon.component';

export type IconName = keyof typeof component;

export interface SvgProps {
  color: string;
  style?: StyleProp<ViewStyle>;
  strokeWidth?: number;
}

const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';
export type IconSize = typeof SMALL | typeof MEDIUM | typeof LARGE;

export interface IconProps {
  color?: string;
  name: IconName;
  style?: StyleProp<ViewStyle>;
  size?: IconSize;
  strokeWidth?: number;
}
