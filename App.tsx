/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screen/Home';
import Stay from 'screen/Stay';
import SearchHome from 'screen/Search/SearchHome';
import SearchDates from 'screen/Search/SearchDates';
import SearchParticipants from 'screen/Search/SearchParticipants';
import Icon from 'component/base/Icon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SearchHome">
      <Stack.Screen name="SearchHome" component={SearchHome} />
      <Stack.Screen name="SearchDates" component={SearchDates} />
      <Stack.Screen name="SearchParticipants" component={SearchParticipants} />
    </Stack.Navigator>
  );
};

const homeOptions = {
  tabBarIcon: ({color}: any) => {
    return <Icon name="home" size="large" color={color} />;
  },
};

const stayOptions = {
  tabBarIcon: ({color}: any) => {
    return <Icon name="calendar" size="large" color={color} />;
  },
};

const TabScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#858585',
        tabBarShowLabel: false,
        headerTitle: '',
        headerLeft: () => (
          <View style={styles.header}>
            <Icon name="notification" size="large" />
          </View>
        ),
        headerRight: () => (
          <View style={styles.header}>
            <Icon name="avatar" size="large" />
          </View>
        ),
      }}>
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Stay" component={Stay} options={stayOptions} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabScreen} />
        <Stack.Screen
          name="Search"
          component={SearchStack}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
  },
});
