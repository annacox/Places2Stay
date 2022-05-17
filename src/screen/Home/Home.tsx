import * as React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';

import Text from 'component/base/Text';

import mockData from './homeMockData';

import SectionHeader from './component/SectionHeader';
import PlaceCard from './component/PlaceCard';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <>
            <View style={[styles.searchContainer, styles.bottomSpacing]}>
              <Text style={styles.searchPlaceholder}>Try 'Boston'</Text>
            </View>
            <SectionHeader
              title="Find your getaway"
              description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
              style={styles.bottomSpacing}
            />
          </>
        }
        renderItem={({item}) => (
          <PlaceCard
            image={item.image}
            label={item.imageLabel}
            address={item.title}
            location={item.location}
            style={styles.bottomSpacing}
          />
        )}
        data={mockData.sections.placeCtas.places}
      />
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
