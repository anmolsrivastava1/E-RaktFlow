import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import TabsNavigator from './navigations/TabsNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#066DE6" />
      <TabsNavigator />
    </NavigationContainer>
  );
}

export default App;
