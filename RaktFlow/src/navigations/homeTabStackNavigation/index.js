import React from 'react';
import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {} from '../../redux/reducer';

// SCREENS
import HomeScreen from '../../screens/Home/Home_Screen';
import RequestBloodScreen from '../../screens/Home/RequestBlood_Screen';
import DonateBloodScreen from '../../screens/Home/DonateBlood_Screen';

const Stack = createNativeStackNavigator();

const HomeTabStackNavigator = () => {
  // REDUX - DISPATCH & SELECTOR
  const dispatch = useDispatch();
  const {} = useSelector(state => state.globalState);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RequestBlood" component={RequestBloodScreen} />
      <Stack.Screen name="DonateBlood" component={DonateBloodScreen} />
    </Stack.Navigator>
  );
};

export default HomeTabStackNavigator;
