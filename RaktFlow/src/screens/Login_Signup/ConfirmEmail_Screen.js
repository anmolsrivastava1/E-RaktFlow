import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Login_Signup/ConfirmEmail_Style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// REDUX - DISPATCHERS AND SELECTORS
import {useSelector, useDispatch} from 'react-redux';

import {axiosOtpPostRequest} from '../../api/axios_requests';
import {
  setAccessToken,
  setRefreshToken,
  toggleUserLoggedIn,
} from '../../redux/reducer';

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
    await axiosOtpPostRequest(data, uuid)
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
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.titleText}}>Confirm your email</Text>
          <Text style={{...styles.subText}}>
            An OTP has been sent to your email address.
          </Text>
        </View>
        {/* ENTRY: OTP */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.subTitleText, marginBottom: 5}}>
            Enter OTP
          </Text>
          <View
            style={{
              ...styles.textInputWrapper,
              backgroundColor: 'white',
            }}>
            <Ionicons name={'mail-outline'} color={'#888'} size={20} />
            <TextInput
              placeholder="Enter your OTP"
              placeholderTextColor={'#888'}
              selectionColor={'#888'}
              returnKeyType={'search'}
              value={otpValue}
              onChangeText={value => {
                setOtpValue(value);
              }}
              onSubmitEditing={value => {
                setOtpValue(value);
              }}
              style={{...styles.textInput}}
            />
          </View>
        </View>
        {/* CONFIRM BUTTON */}
        <TouchableOpacity activeOpacity={0.9} onPress={handleConfirmPressed}>
          <View style={{...styles.button}}>
            <Text style={{...styles.buttonText}}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.footer}}>
          <Text style={{...styles.footerText}}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleLogInPressed}>
            <Text style={{...styles.hyperLinkText}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default ConfirmEmailScreen;
