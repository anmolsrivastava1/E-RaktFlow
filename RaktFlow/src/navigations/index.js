import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// REDUX
import {useSelector, useDispatch} from 'react-redux';

import LoginScreen from '../screens/Login_Signup/Login_Screen';
import SignupScreen from '../screens/Login_Signup/Signup_Screen';
import ResetPasswordScreen from '../screens/Login_Signup/ResetPassword_Screen';
import ConfirmEmailScreen from '../screens/Login_Signup/ConfirmEmail_Screen';
import TabsNavigator from './bottomTabNavigation/index';
// redux actions
import {toggleUserLoggedIn} from '../redux/reducer';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  // REDUX - DISPATCH & SELECTOR
  const dispatch = useDispatch();
  const {isUserLoggedIn, accessToken} = useSelector(state => state.globalState);

  // async storage - implementation??
  React.useEffect(() => {
    if (accessToken != null) {
      dispatch(toggleUserLoggedIn(true));
    }
  }, []);

  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
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
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
