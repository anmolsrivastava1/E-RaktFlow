import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Login_Signup/ResetPassword_Style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const [emailValue, setEmailValue] = React.useState(null);

  const navigation = useNavigation();

  const handleSignUpPressed = () => {
    console.log("'sign up' pressed: navigating to SignUp screen");
    // validate user
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        {/* Title */}
        <View style={{marginBottom: 20}}>
          <Text style={{...styles.titleText}}>Reset your password</Text>
          <Text style={{...styles.subText}}>
            Enter your registered email, to get a confirmation mail.
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
        {/* LOGIN BUTTON */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
          <View style={{...styles.button}}>
            <Text style={{...styles.buttonText}}>Send</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.footer}}>
          <Text style={{...styles.footerText}}>
            Already know the password?{' '}
          </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSignUpPressed}>
            <Text style={{...styles.hyperLinkText}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default ResetPasswordScreen;
