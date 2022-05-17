import * as React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import Text from 'component/base/Text';

import SectionHeader from './component/SectionHeader';
import PlaceCta from './component/PlaceCta';

type SectionHeaderProps = {};

const Home: React.FC<SectionHeaderProps> = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={[styles.searchContainer, styles.bottomSpacing]}>
          <Text style={styles.searchPlaceholder}>Try 'Boston'</Text>
        </View>
        <SectionHeader
          title="Find your getaway"
          description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
          style={styles.bottomSpacing}
        />
        <PlaceCta
          label="From $126"
          address="408 St. Jacques | 1 Br"
          location="Old Montreal, Montreal"
          style={styles.bottomSpacing}
        />
        <PlaceCta
          label="From $126"
          address="408 St. Jacques | 1 Br"
          location="Old Montreal, Montreal"
          style={styles.bottomSpacing}
        />
        <PlaceCta
          label="From $126"
          address="408 St. Jacques | 1 Br"
          location="Old Montreal, Montreal"
          style={styles.bottomSpacing}
        />
        <PlaceCta
          label="From $126"
          address="408 St. Jacques | 1 Br"
          location="Old Montreal, Montreal"
          style={styles.bottomSpacing}
        />
        <PlaceCta
          label="From $126"
          address="408 St. Jacques | 1 Br"
          location="Old Montreal, Montreal"
          style={styles.bottomSpacing}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  bottomSpacing: {
    marginBottom: 16,
  },
  searchPlaceholder: {
    fontSize: 16,
    lineHeight: 20,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
