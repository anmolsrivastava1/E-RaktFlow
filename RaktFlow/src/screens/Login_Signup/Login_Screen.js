import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Login_Signup/Login_Style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [emailValue, setEmailValue] = React.useState(null);
  const [passwordValue, setPasswordValue] = React.useState(null);

  const navigation = useNavigation();

  const handleSignUpPressed = () => {
    console.log("'sign up' pressed: navigating to SignUp screen");
    // validate user
    navigation.navigate('SignUp');
  };

  const handleForgotPasswordPressed = () => {
    console.log(
      "'forgot password' pressed: navigating to Reset Password screen",
    );
    navigation.navigate('ResetPassword');
  };

  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.titleText}}>Log In</Text>
          <Text style={{...styles.subText}}>
            Welcome back, you've been missed!
          </Text>
        </View>
        {/* ENTRY: EMAIL */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.subTitleText, marginBottom: 5}}>
            Email address
          </Text>
          <View
            style={{
              ...styles.textInputWrapper,
              backgroundColor: 'white',
            }}>
            <Ionicons name={'mail-outline'} color={'#888'} size={20} />
            <TextInput
              placeholder="Enter you email address"
              placeholderTextColor={'#888'}
              selectionColor={'#888'}
              returnKeyType={'next'}
              value={emailValue}
              onChangeText={value => {
                setEmailValue(value);
              }}
              onSubmitEditing={() => {}}
              style={{...styles.textInput}}
            />
          </View>
        </View>
        {/* ENTRY PASSWORD */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.subTitleText, marginBottom: 5}}>
            Password
          </Text>
          <View
            style={{
              ...styles.textInputWrapper,
              backgroundColor: 'white',
            }}>
            <Ionicons name={'lock-closed-outline'} color={'#888'} size={20} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={'grey'}
              selectionColor={'#888'}
              returnKeyType={'search'}
              value={passwordValue}
              onChangeText={value => {
                setPasswordValue(value);
              }}
              onSubmitEditing={() => {}}
              style={{...styles.textInput}}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleForgotPasswordPressed}>
          <Text style={{...styles.hyperLinkText}}>Forgot password?</Text>
        </TouchableOpacity>
        {/* LOGIN BUTTON */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
          <View style={{...styles.button}}>
            <Text style={{...styles.buttonText}}>Log In</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.footer}}>
          <Text style={{...styles.footerText}}>Don't have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSignUpPressed}>
            <Text style={{...styles.hyperLinkText}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default LoginScreen;
