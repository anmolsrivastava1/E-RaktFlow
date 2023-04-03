import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import styling from '../../styles/Home/RequestBlood_Style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import CustomTextInput from '../../components/CustomTextInput';

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
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.headerWrapper}}>
        <View style={{position: 'absolute', left: 10}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Ionicons name="arrow-back" color="#1B2D48" size={28} />
          </TouchableOpacity>
        </View>
        <Text style={{...styles.headerText}}>Request Blood</Text>
      </View>
      {isSubmitted ? (
        <View style={{...styles.sumittedBodyWrapper}}>
          <Image
            style={{...styles.logo}}
            source={require('../../../assets/images/check1_logo.png')}
          />
          <Text style={{...styles.submittedTitleText}}>
            Submitted Successfully
          </Text>
          <Text style={{...styles.submittedDescriptionText}}>
            Your request has been successfully submitted.{' '}
          </Text>
        </View>
      ) : (
        <View style={{...styles.bodyWrapper}}>
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
          {/* LOGIN BUTTON */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setIsSubmitted(true);
            }}>
            <View style={{...styles.button}}>
              <Text style={{...styles.buttonText}}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default RequestBloodScreen;

/* colors:
Primary Color
#066DE6

Secondary Color | main icons of homepage
#2F327D

Text/ Heading color
#1B2D48

Sub heading text color
#8992AB

White color
#FFFFFF
*/
