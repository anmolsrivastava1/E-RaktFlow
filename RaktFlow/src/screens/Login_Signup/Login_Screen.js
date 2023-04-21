import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Login_Signup/Login_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import IconTextInput from '../../components/IconTextInput';
import BgBtn from '../../components/BgBtn';

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
        <BgBtn title="Log In" />
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

const styles = StyleSheet.create(styling);

export default LoginScreen;
