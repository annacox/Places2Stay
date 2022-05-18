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
import {SafeAreaView} from 'react-native';

import Home from 'screen/Home';
import Stay from 'screen/Stay';
import Search from 'screen/Search';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* <Home /> */}
      {/* <Stay /> */}
      <Search />
    </SafeAreaView>
  );
};

export default App;
