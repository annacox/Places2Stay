import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';

import Text from 'component/base/Text';

type ToggleValueType = {
  label: string;
  value: string;
};

type ToggleProps = {
  left: ToggleValueType;
  right: ToggleValueType;
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const Toggle: React.FC<ToggleProps> = ({left, right, onPress, style}) => {
  const [value, setToValue] = React.useState(left.value);
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: value === 'dates' ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [value, animation]);

  const handlePress = (toggleValue: string) => {
    setToValue(toggleValue);
    onPress(toggleValue);
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.highlight,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 130],
                }),
              },
            ],
          },
        ]}
      />
      <Pressable
        style={styles.leftLabel}
        onPress={() => handlePress(left.value)}>
        <Text>{left.label}</Text>
      </Pressable>
      <Pressable
        style={styles.rightLabel}
        onPress={() => handlePress(right.value)}>
        <Text>{right.label}</Text>
      </Pressable>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 32,
    backgroundColor: '#E3E3E3',
    width: 266,
    height: 48,
  },
  highlight: {
    position: 'absolute',
    left: 8,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    width: 116,
    height: 32,
  },
  leftLabel: {
    marginLeft: 28,
  },
  rightLabel: {
    marginRight: 28,
  },
});
