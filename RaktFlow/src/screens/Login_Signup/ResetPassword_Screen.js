import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import IconTextInput from '../../components/IconTextInput';
import BgBtn from '../../components/BgBtn';

const ResetPasswordScreen = () => {
  const [emailValue, setEmailValue] = React.useState(null);

  const navigation = useNavigation();

  const handleSignUpPressed = () => {
    console.log("'sign up' pressed: navigating to SignUp screen");
    // validate user
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView style={{...sy.rgScreen}}>
      <View style={{...sy.rgScreenView}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...sy.bgSbTTxt}}>Reset your password</Text>
          <Text style={{...sy.rgMdStTxt}}>
            Enter your registered email, to get a confirmation mail.
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
        {/* LOGIN BUTTON */}
        <BgBtn title="Send" onPress={() => {}} />
        {/* FOOTER  */}
        <View style={{...sy.footerView}}>
          <Text style={{...sy.smRgTTxt}}>Already know the password? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSignUpPressed}>
            <Text style={{...sy.smRgHyperLinkTxt}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
