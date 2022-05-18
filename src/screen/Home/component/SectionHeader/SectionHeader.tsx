import * as React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

import Text from 'component/base/Text';

type SectionHeaderProps = {
  title: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  style,
}) => {
  return (
    <View style={style}>
      <Text variant="heading" style={styles.title}>
        {title}
      </Text>
      <Text>{description}</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
  },
});
