import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

import Text from 'component/base/Text';

type PlaceCardProps = {
  image: ImageSourcePropType;
  label: string;
  address: string;
  location: string;
  style?: StyleProp<ViewStyle>;
};

const PlaceCard: React.FC<PlaceCardProps> = ({
  image,
  label,
  address,
  location,
  style,
}) => {
  return (
    <View style={style}>
      <View style={styles.imageContainer}>
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
        <Image source={image} style={styles.image} />
      </View>

      <Text style={styles.address}>{address}</Text>
      <Text color="#858585" style={styles.location}>
        {location}
      </Text>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  label: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: 0,
    backgroundColor: '#FFA500',
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  address: {
    marginTop: 8,
  },
  location: {
    marginTop: 4,
  },
});
