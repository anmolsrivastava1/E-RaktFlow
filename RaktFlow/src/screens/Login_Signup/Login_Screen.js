import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {
  setAccessToken,
  setFirstName,
  setLastName,
  setEmail,
  setRefreshToken,
  setUuid,
  toggleUserLoggedIn,
} from '../../redux/reducer';
// AXIOS
import {axiosLoginPostRequest} from '../../api/axios_requests';

import IconTextInput from '../../components/TextInputs/IconTextInput';
import BgBtn from '../../components/Buttons/BgBtn';
import ActivityIndicatorBgBtn from '../../components/ActivityIndicators/ActivityIndicatorBgBtn';

const LoginScreen = () => {
  // REDUX - DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  // STATES
  const [emailValue, setEmailValue] = React.useState(null);
  const [passwordValue, setPasswordValue] = React.useState(null);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

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

  const handleLogInPressed = async () => {
    setIsLoggingIn(true);

    if (emailValue !== null && passwordValue !== null) {
      try {
        const login_response = await axiosLoginPostRequest({
          emailValue,
          passwordValue,
        });

        if (login_response.status === 201) {
          const data = login_response.data;
          dispatch(setAccessToken(data.tokens.access));
          dispatch(setRefreshToken(data.tokens.refresh));
          dispatch(setUuid(data.uuid));
          dispatch(setFirstName(data.first_name));
          dispatch(setLastName(data.last_name));
          dispatch(setEmail(data.email));
          dispatch(toggleUserLoggedIn(true));
          console.log('User logged in');
        }
      } catch (error) {
        Alert.alert('Error', 'Invalid email or password');
      }
    } else {
      console.log('Email OR password cannot be empty');
    }

    setIsLoggingIn(false);
  };

  return (
    <ScrollView style={{...sy.rgScreen}}>
      <View style={{...sy.rgScreenView}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...sy.bgSbTTxt}}>Log In</Text>
          <Text style={{...sy.rgMdStTxt}}>
            Welcome back, you've been missed!
          </Text>
        </View>
        {/* ENTRY: EMAIL */}
        <IconTextInput
          title="Email address"
          placeholder="Enter your email address"
          value={emailValue}
          setValue={setEmailValue}
          iconName={'mail-outline'}
        />
        {/* ENTRY PASSWORD */}
        <IconTextInput
          title="Password"
          placeholder="Enter your password"
          value={passwordValue}
          setValue={setPasswordValue}
          iconName={'lock-closed-outline'}
        />
        {/* HYPERLINK: FORGOT PASSWORD */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleForgotPasswordPressed}>
          <Text style={{...sy.smRgHyperLinkTxt}}>Forgot password?</Text>
        </TouchableOpacity>
        {/* LOGIN BUTTON */}
        {isLoggingIn ? (
          <ActivityIndicatorBgBtn />
        ) : (
          <BgBtn title="Log In" onPress={handleLogInPressed} />
        )}

        {/* HYPERLINK: FOOTER  */}
        <View style={{...sy.footerView}}>
          <Text style={{...sy.smRgTTxt}}>Don't have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSignUpPressed}>
            <Text style={{...sy.smRgHyperLinkTxt}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
