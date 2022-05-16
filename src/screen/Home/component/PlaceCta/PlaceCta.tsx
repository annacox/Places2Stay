import * as React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import Text from '../../../../component/base/Text';

import Asset1 from '../../../../asset/image/place-1.jpg';

type PlaceCtaProps = {
  label: string;
  address: string;
  location: string;
};

const PlaceCta: React.FC<PlaceCtaProps> = ({label, address, location}) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
        <Image source={Asset1} style={styles.image} />
      </View>

      <Text style={styles.address}>{address}</Text>
      <Text style={styles.location}>{location}</Text>
    </>
  );
};

export default PlaceCta;

const styles = StyleSheet.create({
  imageContainer: {
    width: 275,
    height: 150,
  },
  image: {
    borderRadius: 8,
    width: 275,
    height: 150,
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
    marginTop: 20,
  },
  location: {
    marginTop: 8,
    color: '#858585',
  },
});
