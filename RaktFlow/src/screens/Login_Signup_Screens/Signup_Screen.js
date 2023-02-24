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
// REDUX - DISPATCHERS AND SELECTORS
import {useSelector, useDispatch} from 'react-redux';

import {axiosPostRequest} from '../../api/axios_requests';
import {
  setUuid,
  setFirstName,
  setLastName,
  setEmail,
} from '../../redux/reducer';

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

  const handleLoginPressed = () => {
    console.log("'log in' pressed: navigating to LogIn Screen");
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.titleText}}>Sign Up</Text>
          <Text style={{...styles.subText}}>Welcome to RaktFlow</Text>
        </View>
        {/* ENTRY: FIRST NAME */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.subTitleText, marginBottom: 5}}>
            First name
          </Text>
          <View
            style={{
              ...styles.textInputWrapper,
              backgroundColor: 'white',
            }}>
            <Ionicons name={'person-outline'} color={'#888'} size={20} />
            <TextInput
              placeholder="Enter your first name"
              placeholderTextColor={'#888'}
              selectionColor={'#888'}
              returnKeyType={'search'}
              value={firstNameValue}
              onChangeText={value => {
                setFirstNameValue(value);
              }}
              onSubmitEditing={() => {}}
              style={{...styles.textInput}}
            />
          </View>
        </View>
        {/* ENTRY: LAST NAME */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.subTitleText, marginBottom: 5}}>
            Last name
          </Text>
          <View
            style={{
              ...styles.textInputWrapper,
              backgroundColor: 'white',
            }}>
            <Ionicons name={'person-outline'} color={'#888'} size={20} />
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor={'#888'}
              selectionColor={'#888'}
              returnKeyType={'search'}
              value={lastNameValue}
              onChangeText={value => {
                setLastNameValue(value);
              }}
              onSubmitEditing={() => {}}
              style={{...styles.textInput}}
            />
          </View>
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
              placeholder="Enter your email address"
              textContentType="emailAddress"
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
              textContentType="password"
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
        {/* SIGNUP BUTTON */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            handleSignUpBTN({
              first_name: firstNameValue,
              last_name: lastNameValue,
              email: emailValue,
              password: passwordValue,
            });
          }}>
          <View style={{...styles.button}}>
            <Text style={{...styles.buttonText}}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.footer}}>
          <Text style={{...styles.footerText}}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleLoginPressed}>
            <Text style={{...styles.hyperLinkText}}>Log in</Text>
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

export default SignupScreen;
