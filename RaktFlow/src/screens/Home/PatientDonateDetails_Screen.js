import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import styling from '../../styles/Home/PateintDonateDetails_Style.js';
import sy from '../../styles/styling.js';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {} from '../../api/axios_requests.js';

import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn.js';
import MdBtn from '../../components/Buttons/MdBtn.js';
import MdNegBtn from '../../components/Buttons/MdNegBtn.js';
import ActivityIndicatorScreen from '../../components/ActivityIndicators/ActivityIndicatorScreen.js';

const PatientDonateDetailsScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(false);
  const [resData, setResData] = React.useState(null);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Donate Blood</Text>
      </View>
      {isLoadingScreen ? (
        <ActivityIndicatorScreen />
      ) : (
        <View style={{...styles.bodyWrapper}}>
          {/* Header Details  */}
          <View style={{...sy.flexRow, marginBottom: 30}}>
            <Image
              alt="avatar"
              source={require('../../../assets/images/avatar_logo.png')}
              style={{height: 80, width: 80, marginRight: 20}}
            />
            <View>
              <Text style={{...sy.smRgTTxt}}>Anmol Srivastava</Text>
              <Text style={{...sy.smRgTTxt}}>
                Blood group required: <Text style={{color: '#F52D56'}}>B+</Text>
              </Text>
              <Text style={{...sy.exSmRgStTxt}}>Date posted: 29-04-2023</Text>
            </View>
          </View>
          {/* Other Details  */}
          <View style={{...styles.detailsWrapper}}>
            <Text style={{...sy.mdMdTTxt}}>Details</Text>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Age</Text>
              <Text style={{...sy.smRgTTxt}}>29 years</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Blood units required</Text>
              <Text style={{...sy.smRgTTxt}}>2 units</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Date of requirement</Text>
              <Text style={{...sy.smRgTTxt}}>30-04-2023</Text>
            </View>
          </View>
          {/* Contact Details  */}
          <View style={{...styles.detailsWrapper}}>
            <Text style={{...sy.mdMdTTxt}}>Contact details</Text>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Mobile no</Text>
              <Text style={{...sy.smRgTTxt}}>9876545678</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Location</Text>
              <Text style={{...sy.smRgTTxt}}>JSSATEN</Text>
            </View>
          </View>
          <View style={{...styles.actionWrapper}}>
            <MdNegBtn title="Send details" onPress={() => {}} />
            <MdBtn title="Call" onPress={() => {}} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default PatientDonateDetailsScreen;
