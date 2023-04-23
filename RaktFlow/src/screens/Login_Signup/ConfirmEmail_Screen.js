import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX - DISPATCHERS AND SELECTORS
import {useSelector, useDispatch} from 'react-redux';

import {axiosVerifyOtpPatchRequest} from '../../api/axios_requests';
import {
  setAccessToken,
  setRefreshToken,
  toggleUserLoggedIn,
} from '../../redux/reducer';
import IconTextInput from '../../components/IconTextInput';
import BgBtn from '../../components/BgBtn';

const ConfirmEmailScreen = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const {uuid} = useSelector(state => state.globalState);
  // STATES
  const [otpValue, setOtpValue] = React.useState(null);

  const navigation = useNavigation();

  const handleLogInPressed = () => {
    navigation.navigate('LogIn');
  };

  const handleConfirmPressed = async () => {
    // make an axios post request for OTP
    const data = {otp: otpValue};
    await axiosVerifyOtpPatchRequest(data, uuid)
      .then(res => {
        console.log(res.data);
        dispatch(setAccessToken(res.data.token.access));
        dispatch(setRefreshToken(res.data.token.refresh));
        dispatch(toggleUserLoggedIn(true));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={{...sy.rgScreen}}>
      <View style={{...sy.rgScreenView}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...sy.bgSbTTxt}}>Confirm your email</Text>
          <Text style={{...sy.rgMdStTxt}}>
            An OTP has been sent to your email address.
          </Text>
        </View>
        {/* ENTRY: OTP */}
        <IconTextInput
          title="Enter OTP"
          placeholder="Enter your OTP"
          value={otpValue}
          setValue={setOtpValue}
          iconName={'mail-outline'}
        />
        {/* CONFIRM BUTTON */}
        <BgBtn title="Confirm" onPress={handleConfirmPressed} />
        {/* FOOTER  */}
        <View style={{...sy.footerView}}>
          <Text style={{...sy.smRgTTxt}}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleLogInPressed}>
            <Text style={{...sy.smRgHyperLinkTxt}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
