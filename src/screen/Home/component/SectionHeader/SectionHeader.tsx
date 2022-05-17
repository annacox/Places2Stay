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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    lineHeight: 15,
  },
});
