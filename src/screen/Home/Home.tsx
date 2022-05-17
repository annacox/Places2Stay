import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
} from 'react-native';

import Text from 'component/base/Text';

import mockData from './homeMockData';

import SectionHeader from './component/SectionHeader';
import PlaceCard from './component/PlaceCard';
import CityCard from './component/CityCard';

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
              title={mockData.sections.placeCtas.title}
              description={mockData.sections.placeCtas.description}
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
        ListFooterComponent={
          <>
            <Text style={{fontSize: 24, lineHeight: 29, marginBottom: 12}}>
              {mockData.sections.cityCtas.title}
            </Text>
            <ScrollView horizontal style={{paddingBottom: 16}}>
              {mockData.sections.cityCtas.places.map(city => (
                <CityCard
                  image={city.image}
                  name={city.title}
                  style={styles.rightSpacing}
                />
              ))}
            </ScrollView>
          </>
        }
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
  rightSpacing: {
    marginRight: 24,
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
