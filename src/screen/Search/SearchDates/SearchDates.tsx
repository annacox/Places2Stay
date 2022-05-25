import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import Text from 'component/base/Text';
import Toggle from 'component/base/Toggle';
import Button from 'component/base/Button';
import Calendar from 'component/base/Calendar';

type SearchDatesProps = {
  route: RouteProp<{params: {city: string}}>;
  navigation: NavigationProp<any, any>;
};

const SearchDates: React.FC<SearchDatesProps> = ({route, navigation}) => {
  const {city} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text variant="bodyLarge">{city}</Text>
        <Toggle
          style={styles.toggle}
          leftLabel="Calendar"
          rightLabel="I'm flexible"
        />
        <Calendar onPress={() => {}} />
        <View style={styles.buttonContainer}>
          <Button
            variant="secondary"
            label="Skip"
            onPress={() => navigation.navigate('SearchParticipants')}
          />
          <Button
            variant="primary"
            label="Next"
            onPress={() => navigation.navigate('SearchParticipants')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchDates;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    height: '100%',
  },
  toggle: {
    marginVertical: 32,
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
