import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// REDUX - DISPATCHERS AND SELECTORS
import { useSelector, useDispatch } from 'react-redux';

import { axiosOtpPostRequest } from '../../api/axios_requests';
import {
  setAccessToken,
  setRefreshToken,
  toggleUserLoggedIn,
} from '../../redux/reducer';

const ConfirmEmailScreen = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const { uuid } = useSelector(state => state.globalState);
  // STATES
  const [otpValue, setOtpValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation();

  const handleLogInPressed = () => {
    navigation.navigate('LogIn');
  };

  const handleConfirmPressed = async () => {
    // make an axios post request for OTP
    if (otpValue.length !== 6) {
      Alert.alert("Otp should be 6 digits");
      return
    }
    setIsLoading(true)

    const data = { otp: otpValue };

    await axiosOtpPostRequest(data, uuid)
      .then(res => {
        console.log(res.data);
        dispatch(setAccessToken(res.data.token.access));
        dispatch(setRefreshToken(res.data.token.refresh));
        dispatch(toggleUserLoggedIn(true));
      })
      .catch(error => {
        try {
          Alert.alert(String(Object.keys(error)[0]), String(error[Object.keys(error)[0]]))
        }
        catch (error) {
          console.log(error);
        }
      });

    setIsLoading(false)

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
        {isLoading ? <ActivityIndicator size="large" color="#1B2D48" /> :
          <TouchableOpacity activeOpacity={0.9} onPress={handleConfirmPressed}>
            <View style={{ ...styles.button }}>
              <Text style={{ ...styles.buttonText }}>Confirm</Text>
            </View>
          </TouchableOpacity>
        }

        <View style={{ ...styles.footer }}>
          <Text style={{ ...styles.footerText }}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleLogInPressed}>
            <Text style={{ ...styles.hyperLinkText }}>Log in</Text>
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

export default ConfirmEmailScreen;
