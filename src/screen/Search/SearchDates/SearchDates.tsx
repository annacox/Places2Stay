import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import Text from 'component/base/Text';
import Toggle from 'component/base/Toggle';

type SearchDatesProps = {
  route: RouteProp<{params: {city: string}}>;
  navigation: NavigationProp<any, any>;
};

const SearchDates: React.FC<SearchDatesProps> = ({route, navigation}) => {
  const {city} = route.params;
  return (
    <SafeAreaView>
      <Text variant="bodyLarge">{city}</Text>
      <Toggle
        style={styles.toggle}
        leftLabel="Calendar"
        rightLabel="I'm flexible"
      />
    </SafeAreaView>
  );
};

export default SearchDates;

const styles = StyleSheet.create({
  toggle: {
    marginVertical: 32,
  },
});
