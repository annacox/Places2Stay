import * as React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

import Text from 'component/base/Text';

type Item = {
  itemLabel: string;
  itemDetail: string;
};

type DetailCardProps = {
  label: string;
  items: Item[];
  style?: StyleProp<ViewStyle>;
};

const DetailCard: React.FC<DetailCardProps> = ({label, items, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerContainer}>
        <View style={styles.label}>
          <Text color="#FFFFFF">{label}</Text>
        </View>
        <Text color="#4169E1" style={styles.ellipses}>
          •••
        </Text>
      </View>
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text>{item.itemLabel}</Text>
          <Text>{item.itemDetail}</Text>
        </View>
      ))}
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E1DFD8',
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    backgroundColor: '#4169E1',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
  },
  ellipses: {
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginBottom: 16,
  },
});
