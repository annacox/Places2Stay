import * as React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import Text from 'component/base/Text';
import Button from 'component/base/Button';

type SearchGuestsProps = {
  route: RouteProp<{params: {location: string}}>;
  navigation: NavigationProp<any, any>;
};

const SearchGuests: React.FC<SearchGuestsProps> = ({route, navigation}) => {
  const {location} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text variant="bodyLarge">{location}</Text>
        <Text>Guests</Text>

        <View style={styles.buttonContainer}>
          <Button
            variant="secondary"
            label="Skip"
            onPress={() => navigation.navigate('Home', {location})}
          />
          <Button
            variant="primary"
            label="Find Places"
            onPress={() => navigation.navigate('Home', {location})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchGuests;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    height: '100%',
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
