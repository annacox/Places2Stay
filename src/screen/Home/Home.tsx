import * as React from 'react';
import {SafeAreaView} from 'react-native';

import SectionHeader from './component/SectionHeader';

type SectionHeaderProps = {};

const Home: React.FC<SectionHeaderProps> = () => {
  return (
    <SafeAreaView>
      <SectionHeader
        title="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
    </SafeAreaView>
  );
};

export default Home;
