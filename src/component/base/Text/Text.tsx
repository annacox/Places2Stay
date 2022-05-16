import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyleProps,
} from 'react-native';

type CustomProps = {
  style?: RNTextStyleProps;
};

type TextProps = CustomProps & RNTextProps;

const Text: React.FC<TextProps> = ({children, style}) => {
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
