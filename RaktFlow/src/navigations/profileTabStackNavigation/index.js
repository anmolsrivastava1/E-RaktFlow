import React from 'react';
import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {} from '../../redux/reducer';

// SCREENS
import ProfileScreen from '../../screens/Profile/Profile_Screen';
import ResetPasswordScreen from '../../screens/Login_Signup/ResetPassword_Screen';

const Stack = createNativeStackNavigator();

const ProfileTabStackNavigator = () => {
  // REDUX - DISPATCH & SELECTOR
  const dispatch = useDispatch();
  const {} = useSelector(state => state.globalState);

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default ProfileTabStackNavigator;
