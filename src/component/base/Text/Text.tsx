import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyleProps,
  StyleSheet,
} from 'react-native';

type CustomProps = {
  variant?: 'heading' | 'bodyLarge' | 'bodyLargeBold' | 'body';
  color?: string;
  style?: RNTextStyleProps;
};

type TextProps = CustomProps & RNTextProps;

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color: colorProp = '#000000',
  style,
}) => {
  return (
    <RNText style={[styles[variant], {color: colorProp}, style]}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Bitter-Regular',
    fontSize: 24,
    lineHeight: 29,
  },
  bodyLarge: {
    fontFamily: 'EncodeSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
  bodyLargeBold: {
    fontFamily: 'EncodeSans-Regular',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
  },
  body: {
    fontFamily: 'EncodeSans-Regular',
    fontSize: 12,
    lineHeight: 15,
  },
});
