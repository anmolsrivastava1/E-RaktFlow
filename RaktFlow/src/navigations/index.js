import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login_Signup_Screens/LoginScreen';
import SignupScreen from '../screens/Login_Signup_Screens/SignupScreen';
import ResetPasswordScreen from '../screens/Login_Signup_Screens/ResetPasswordScreen';
import TabsNavigator from './bottomTabNavigation/index';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      {loggedIn ? (
        <TabsNavigator />
      ) : (
        <Stack.Navigator
          initialRouteName="LogIn"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
