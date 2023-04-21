import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
// REDUX
import {Provider} from 'react-redux';
import store from './redux/store';

import RootNavigation from './navigations/index';
// TEST SCREENS
// import RequestBloodScreen from './screens/Home/RequestBlood_Screen';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{...styles.screen}}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F4F6" />
        <RootNavigation />
        {/* Test Screens  */}
        {/* <RequestBloodScreen /> */}
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
