import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import RootNavigation from './navigations/index';

function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaView style={{...styles.screen }}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F4F6" />
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
