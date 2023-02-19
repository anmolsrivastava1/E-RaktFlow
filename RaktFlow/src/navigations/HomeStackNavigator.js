import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const {} = props;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        children={({navigation}) => <HomeScreen navigation={navigation} />}
      />
      <Stack.Screen
        name="LogIn"
        options={{
          headerShown: false,
          title: 'Log In',
          headerTintColor: '#066DE6',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 18,
          },
        }}
        children={() => <LoginScreen />}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
          title: 'Sign Up',
          headerTintColor: '#066DE6',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 18,
          },
        }}
        children={() => <SignupScreen />}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeStackNavigator;
