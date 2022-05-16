import * as React from 'react';
import {SafeAreaView} from 'react-native';

import SectionHeader from './component/SectionHeader';
import PlaceCta from './component/PlaceCta';

type SectionHeaderProps = {};

const Home: React.FC<SectionHeaderProps> = () => {
  return (
    <SafeAreaView>
      <SectionHeader
        title="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
      <PlaceCta
        label="From $126"
        address="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
      />
    </SafeAreaView>
  );
};

export default Home;
