import * as React from 'react';
import {PressableProps, StyleProp, ViewStyle} from 'react-native';

import Text from 'component/base/Text';
import {Pressable, StyleSheet} from 'react-native';

interface ButtonProps extends PressableProps {
  label: string;
  variant: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({label, variant, style, onPress}) => {
  return (
    <Pressable
      style={[styles.container, styles[variant], style]}
      onPress={onPress}>
      <Text style={[textStyles.label, textStyles[variant]]} variant="bodyLarge">
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 120,
    borderRadius: 8,
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#4169E1',
  },
  secondary: {
    backgroundColor: 'transparent',
  },
});

const textStyles = StyleSheet.create({
  label: {textAlign: 'center'},
  primary: {
    color: '#FFFFFF',
  },
  secondary: {
    color: '#000000',
  },
});
