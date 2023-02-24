import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
// REDUX
import {Provider} from 'react-redux';
import store from './redux/store';

import RootNavigation from './navigations/index';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{...styles.screen}}>
        <StatusBar barStyle="light-content" backgroundColor="#066DE6" />
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
