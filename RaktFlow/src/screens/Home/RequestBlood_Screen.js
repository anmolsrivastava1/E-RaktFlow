import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import styling from '../../styles/Home/RequestBlood_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {axiosRaiseBloodPostRequest} from '../../api/axios_requests';

import CustomTextInput from '../../components/TextInputs/CustomTextInput';
import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';
import BgBtn from '../../components/Buttons/BgBtn';
import ActivityIndicatorBgBtn from '../../components/ActivityIndicators/ActivityIndicatorBgBtn';

const RequestBloodScreen = () => {
  const navigation = useNavigation();
  // REDUX - DISPATCHER/SELECTOR
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [firstNameValue, setFirstNameValue] = React.useState(null);
  const [lastNameValue, setLastNameValue] = React.useState(null);
  const [ageValue, setAgeValue] = React.useState(null);
  const [mobileValue, setMobileValue] = React.useState(null);
  const [bloodGroupValue, setBloodGroupValue] = React.useState(null);
  const [unitValue, setUnitValue] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(null);
  const [reqDateValue, setReqDateValue] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // API
  const handleSubmitPressed = async () => {
    setIsLoading(true);

    if (accessToken !== null) {
      try {
        const response = await axiosRaiseBloodPostRequest(
          {
            first_name: firstNameValue,
            last_name: lastNameValue,
            age: ageValue,
            mobile: mobileValue,
            blood_group: bloodGroupValue,
            unit: unitValue,
            location: locationValue,
            requirement_date: reqDateValue,
          },
          accessToken,
        );
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          // const data = response.data;
          setIsSubmitted(true);
          // console.log(data);
        }
      } catch (error) {
        console.log(`Couldn't raise blood request!!`);
        // console.log(error);
        console.log(accessToken);
      }
    } else {
      console.log(`Couldn't find access token!!`);
    }

    setIsLoading(false);
  };

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
          {isLoading ? (
            <ActivityIndicatorBgBtn />
          ) : (
            <BgBtn title="Submit" onPress={handleSubmitPressed} />
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default RequestBloodScreen;
