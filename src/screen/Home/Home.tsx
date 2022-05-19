import * as React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Animated} from 'react-native';

import Text from 'component/base/Text';

import mockData from './homeMockData';

import SectionHeader from './component/SectionHeader';
import PlaceCard from './component/PlaceCard';
import CityCard from './component/CityCard';

const Home: React.FC = () => {
  const animation = React.useRef(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: animation.current}}}],
    {useNativeDriver: true},
  );

  const animatedSearchBar = (
    <Animated.View
      style={[
        styles.searchContainer,
        styles.bottomSpacing,
        {transform: [{translateY: animation.current}]},
      ]}>
      <Text variant="bodyLarge" color="#858585">
        Try 'Boston'
      </Text>
    </Animated.View>
  );

  return (
    <SafeAreaView>
      <Animated.ScrollView style={styles.container} onScroll={handleScroll}>
        <>
          {animatedSearchBar}
          <SectionHeader
            title={mockData.sections.placeCtas.title}
            description={mockData.sections.placeCtas.description}
            style={styles.bottomSpacing}
          />
          {mockData.sections.placeCtas.places.map(item => (
            <PlaceCard
              image={item.image}
              label={item.imageLabel}
              address={item.title}
              location={item.location}
              style={styles.bottomSpacing}
            />
          ))}
          <Text variant="heading" style={styles.footerHeading}>
            {mockData.sections.cityCtas.title}
          </Text>
          <ScrollView horizontal style={styles.carousel}>
            {mockData.sections.cityCtas.places.map(city => (
              <CityCard
                key={city.id}
                image={city.image}
                name={city.title}
                style={styles.rightSpacing}
              />
            ))}
          </ScrollView>
        </>
      </Animated.ScrollView>
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
  searchContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
  },
  footerHeading: {
    marginBottom: 12,
  },
  carousel: {
    paddingBottom: 16,
  },
});
