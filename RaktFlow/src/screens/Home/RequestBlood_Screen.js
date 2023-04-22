import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import styling from '../../styles/Home/RequestBlood_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import CustomTextInput from '../../components/CustomTextInput';
import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';
import BgBtn from '../../components/BgBtn';

const RequestBloodScreen = () => {
  // Navigation
  const navigation = useNavigation();

  // States
  const [firstNameValue, setFirstNameValue] = React.useState(null);
  const [lastNameValue, setLastNameValue] = React.useState(null);
  const [ageValue, setAgeValue] = React.useState(null);
  const [mobileValue, setMobileValue] = React.useState(null);
  const [bloodGroupValue, setBloodGroupValue] = React.useState(null);
  const [unitValue, setUnitValue] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(null);
  const [reqDateValue, setReqDateValue] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Request Blood</Text>
      </View>
      {isSubmitted ? (
        <View style={{...styles.sumittedBodyWrapper}}>
          <Image
            style={{...styles.logo}}
            source={require('../../../assets/images/check1_logo.png')}
          />
          <Text style={{...sy.md2SbTTxt, marginTop: 20}}>
            Submitted Successfully
          </Text>
          <Text style={{...sy.rgMdStTxt, textAlign: 'center'}}>
            Your request has been successfully submitted.{' '}
          </Text>
        </View>
      ) : (
        <View style={{padding: 20}}>
          <CustomTextInput
            title={'First name'}
            placeholder={'Enter your first name'}
            value={firstNameValue}
            setValue={setFirstNameValue}
          />
          <CustomTextInput
            title={'Last name'}
            placeholder={'Enter your last name'}
            value={lastNameValue}
            setValue={setLastNameValue}
          />
          <CustomTextInput
            title={'Age'}
            placeholder={'Enter your age'}
            value={ageValue}
            setValue={setAgeValue}
          />
          <CustomTextInput
            title={'Mobile Number'}
            placeholder={'Enter your mobile number'}
            value={mobileValue}
            setValue={setMobileValue}
          />
          <CustomTextInput
            title={'Blood Group'}
            placeholder={'Enter your blood group'}
            value={bloodGroupValue}
            setValue={setBloodGroupValue}
          />
          <CustomTextInput
            title={'Unit'}
            placeholder={'Enter unit needed'}
            value={unitValue}
            setValue={setUnitValue}
          />
          <CustomTextInput
            title={'Location'}
            placeholder={'Enter your Location'}
            value={locationValue}
            setValue={setLocationValue}
          />
          <CustomTextInput
            title={'Requirement date'}
            placeholder={'Enter requirement date'}
            value={reqDateValue}
            setValue={setReqDateValue}
          />
          {/* SUBMIT BUTTON */}
          <BgBtn
            title="Submit"
            onPress={() => {
              setIsSubmitted(true);
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default RequestBloodScreen;
