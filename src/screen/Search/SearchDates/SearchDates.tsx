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

const LENGTH_OPTIONS = ['Weekend', 'Week', 'Month'];
const MONTH_OPTIONS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SearchDates: React.FC<SearchDatesProps> = ({route, navigation}) => {
  const [activeView, setActiveView] = React.useState('dates'); // dates || flexible
  const [length, setLength] = React.useState(LENGTH_OPTIONS[0]);
  const [month, setMonth] = React.useState(MONTH_OPTIONS[0]);

  const {city} = route.params;

  const handleTogglePress = (value: string) => {
    setActiveView(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text variant="bodyLarge">{city}</Text>
        <Toggle
          style={styles.toggle}
          left={{label: 'Calendar', value: 'dates'}}
          right={{label: "I'm flexible", value: 'flexible'}}
          onPress={handleTogglePress}
        />
        {activeView === 'dates' ? (
          <Calendar onPress={() => {}} />
        ) : (
          <>
            <View>
              <Text variant="bodyLarge">Stay for a </Text>
              <Text variant="bodyLargeBold">{length}</Text>
            </View>
            <View>
              <Text variant="bodyLarge">Go in </Text>
              <Text variant="bodyLargeBold">{month}</Text>
            </View>
          </>
        )}

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
