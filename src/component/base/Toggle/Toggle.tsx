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

type ToggleProps = {
  leftLabel: string;
  rightLabel: string;
  style?: StyleProp<ViewStyle>;
};

const Toggle: React.FC<ToggleProps> = ({leftLabel, rightLabel, style}) => {
  const [value, setToValue] = React.useState(0);
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [value, animation]);

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
      <Pressable style={styles.leftLabel} onPress={() => setToValue(0)}>
        <Text>{leftLabel}</Text>
      </Pressable>
      <Pressable style={styles.rightLabel} onPress={() => setToValue(1)}>
        <Text>{rightLabel}</Text>
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
