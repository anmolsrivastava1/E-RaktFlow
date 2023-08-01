import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';

import IconTextInput from '../../components/TextInputs/IconTextInput';
import BgBtn from '../../components/Buttons/BgBtn';
import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {isUserLoggedIn} = useSelector(state => state.globalState);
  // STATES
  const [emailValue, setEmailValue] = React.useState(null);

  const handleLoginPressed = () => {
    // validate user
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={{...sy.rgScreen}}>
      {isUserLoggedIn ? (
        <View style={{...sy.flexRowAlignJustify, marginBottom: 30}}>
          <BackHeaderArrowBtn
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </View>
      ) : null}
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
        {isUserLoggedIn ? null : (
          <View style={{...sy.footerView}}>
            <Text style={{...sy.smRgTTxt}}>Already know the password? </Text>
            <TouchableOpacity activeOpacity={0.9} onPress={handleLoginPressed}>
              <Text style={{...sy.smRgHyperLinkTxt}}>Log in</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
