import * as React from 'react';
import {StyleSheet, Image, SafeAreaView, View} from 'react-native';

import Text from 'component/base/Text';

import mockData from './stayMockData';

import DetailCard from './component/DetailCard';

const Stay: React.FC = () => {
  return (
    <SafeAreaView>
      <Image source={mockData.image} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.headerSpacing}>
          <Text variant="heading" style={styles.textSpacing}>
            {mockData.title}
          </Text>
          <Text color="#8C8C8C" style={styles.textSpacing}>
            {mockData.location}
          </Text>
          <Text color="#8C8C8C">{mockData.dates}</Text>
        </View>

        {mockData.details.map((detail, index) => (
          <DetailCard
            key={index}
            label={detail.title}
            items={detail.items}
            style={styles.card}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Stay;

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerSpacing: {
    marginBottom: 24,
  },
  textSpacing: {
    marginBottom: 8,
  },
  card: {
    marginBottom: 32,
  },
});
