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
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from 'screen/Home';
import Stay from 'screen/Stay';
import Search from 'screen/Search';
import Icon from 'component/base/Icon';

const {Navigator, Screen} = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Stay') {
              iconName = 'calendar';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }

            return <Icon name={iconName} size="large" color={color} />;
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#858585',
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Screen name="Home" component={Home} />
        <Screen name="Stay" component={Stay} />
        <Screen name="Search" component={Search} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
