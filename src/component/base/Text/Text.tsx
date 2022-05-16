import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyleProps,
} from 'react-native';

type CustomProps = {
  styles?: RNTextStyleProps;
};

type TextProps = CustomProps & RNTextProps;

const Text: React.FC<TextProps> = ({children, styles}) => {
  return <RNText style={styles}>{children}</RNText>;
};

export default Text;
