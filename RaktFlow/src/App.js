import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import RootNavigation from './navigations/index';

function App() {
  return (
    <SafeAreaView style={{...styles.screen}}>
      <StatusBar barStyle="light-content" backgroundColor="#066DE6" />
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
