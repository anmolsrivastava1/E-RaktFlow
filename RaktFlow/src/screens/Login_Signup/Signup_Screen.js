import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Login_Signup/Signup_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX - DISPATCHERS AND SELECTORS
import {useSelector, useDispatch} from 'react-redux';

import {axiosPostRequest} from '../../api/axios_requests';
import {
  setUuid,
  setFirstName,
  setLastName,
  setEmail,
} from '../../redux/reducer';
import IconTextInput from '../../components/IconTextInput';
import BgBtn from '../../components/BgBtn';

const SignupScreen = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // STATES
  const [firstNameValue, setFirstNameValue] = React.useState(null);
  const [lastNameValue, setLastNameValue] = React.useState(null);
  const [emailValue, setEmailValue] = React.useState(null);
  const [passwordValue, setPasswordValue] = React.useState(null);
  const [uuidValue, setUuidValue] = React.useState(null);

  const navigation = useNavigation();

  const handleSignUpBTN = async data => {
    // navigate to the ConfirmEmail_Screen
    navigation.navigate('ConfirmEmail');
    // make an axios post request for OTP
    await axiosPostRequest(data)
      .then(res => {
        console.log(res.data.uuid);
        setUuidValue(res.data.uuid);
        dispatch(setUuid(res.data.uuid));
        dispatch(setFirstName(firstNameValue));
        dispatch(setLastName(lastNameValue));
        dispatch(setEmail(emailValue));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignUpPressed = () => {
    handleSignUpBTN({
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  const handleLoginPressed = () => {
    console.log("'log in' pressed: navigating to LogIn Screen");
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView style={{...sy.rgScreen}}>
      <View style={{...sy.rgScreenView}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...sy.bgSbTTxt}}>Sign Up</Text>
          <Text style={{...sy.rgMdStTxt}}>Welcome to RaktFlow</Text>
        </View>
        {/* ENTRY: FIRST NAME */}
        <IconTextInput
          title="First name"
          placeholder="Enter your first name"
          value={firstNameValue}
          setValue={setFirstNameValue}
          iconName="person-outline"
        />
        {/* ENTRY: LAST NAME */}
        <IconTextInput
          title="Last name"
          placeholder="Enter your last name"
          value={lastNameValue}
          setValue={setLastNameValue}
          iconName="person-outline"
        />
        {/* ENTRY: EMAIL */}
        <IconTextInput
          title="Email address"
          placeholder="Enter your email address"
          value={emailValue}
          setValue={setEmailValue}
          iconName="mail-outline"
        />
        {/* ENTRY: PASSWORD */}
        <IconTextInput
          title="Password"
          placeholder="Enter your password"
          value={passwordValue}
          setValue={setPasswordValue}
          iconName="lock-closed-outline"
        />
        {/* SIGNUP BUTTON */}
        <BgBtn title="Sign Up" onPress={handleSignUpPressed} />
        {/* FOOTER  */}
        <View style={{...sy.footerView}}>
          <Text style={{...sy.smRgTTxt}}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleLoginPressed}>
            <Text style={{...sy.smRgHyperLinkTxt}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default SignupScreen;
