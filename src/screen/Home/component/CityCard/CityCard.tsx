import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import Text from 'component/base/Text';

type CityCardProps = {
  image: ImageSourcePropType;
  name: string;
  style?: StyleProp<ViewStyle>;
};

const CityCard: React.FC<CityCardProps> = ({image, name, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 160,
    width: 120,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  name: {
    marginTop: 8,
  },
});
