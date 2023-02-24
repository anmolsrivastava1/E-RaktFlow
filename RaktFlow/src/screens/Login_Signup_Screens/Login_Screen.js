import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
              returnKeyType={'search'}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    // backgroundColor: 'lightgreen',
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#066DE6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 28,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  subTitleText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  subText: {
    fontSize: 16,
    color: 'grey',
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: '3%',
    width: '80%',
  },
  hyperLinkText: {
    fontSize: 14,
    color: '#066DE6',
    fontFamily: 'Poppins-Medium',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});

export default LoginScreen;
