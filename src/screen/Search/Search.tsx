import * as React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';

import Text from 'component/base/Text';

import mockData from './searchMockData';

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResult, setSearchResult] = React.useState(mockData.cities);

  React.useEffect(() => {
    const filteredCities = mockData.cities.filter(cityName =>
      cityName.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setSearchResult(filteredCities);
  }, [searchInput]);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Where are you going?"
          placeholderTextColor="#858585"
          textAlign="center"
          onChangeText={setSearchInput}
        />
        <View style={styles.list}>
          {searchResult.map(city => (
            <View style={styles.listItem}>
              <Text variant="bodyLarge">{city}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 100,
    height: 60,
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 24,
    fontFamily: 'EncodeSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
  list: {
    marginHorizontal: 72,
  },
  listItem: {
    marginBottom: 10,
  },
});
