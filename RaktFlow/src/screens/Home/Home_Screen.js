import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import styling from '../../styles/Home/Home_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
// COMPONENTS
import CardHome from '../../components/CardHome';

const HomeScreen = () => {
  const navigation = useNavigation();
  // REDUX - DISPATCHER/SELECTOR
  const {firstName} = useSelector(state => state.globalState);

  return (
    <ScrollView style={{...sy.hmScreen}}>
      {/* HEADER  */}
      <View style={{...sy.flexRowAlignSB, marginBottom: 15}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{...styles.avatarWrapper}}>
            <Ionicons name={'person'} color={'#1B2D48'} size={32} />
          </View>
          <View style={{marginLeft: 15}}>
            <Text style={{...sy.smRgStTxt}}>Welcome,</Text>
            <Text style={{...sy.rgSbTTxt}}>{`${firstName} !`}</Text>
          </View>
        </View>
        {/* NOTIFICATION BELL  */}
        <View style={{...styles.alertWrapper}}>
          <Ionicons
            name={'notifications-outline'}
            color={'#1B2D48'}
            size={26}
          />
        </View>
      </View>
      <View style={{paddingBottom: 30}}>
        {/* CATEGORIES  */}
        <Text style={{...sy.bgSbTTxt, ...styles.titleText}}>Categories</Text>
        <View>
          {/* LINE ONE */}
          <View style={{...sy.rowSpaceEvenlyMgb20}}>
            <CardHome
              title="Donate Blood"
              reqImgPath={require('../../../assets/images/patient_logo.png')}
              onPress={() => {
                // navigation.navigate('DonateBlood');
              }}
            />
            <CardHome
              title="Request Blood"
              reqImgPath={require('../../../assets/images/blood1_logo.png')}
              onPress={() => {
                navigation.navigate('RequestBlood');
              }}
            />
          </View>
          {/* LINE TWO */}
          <View style={{...sy.rowSpaceEvenlyMgb20}}>
            <CardHome
              title="Book Ambulance"
              reqImgPath={require('../../../assets/images/ambulance_logo.png')}
              onPress={() => {
                // navigation.navigate('BookAmbulance');
              }}
            />
            <CardHome
              title="Hospital Details"
              reqImgPath={require('../../../assets/images/hospital_logo.png')}
              onPress={() => {
                // navigation.navigate('Hospital Details');
              }}
            />
          </View>
          {/* LINE THREE */}
          <View style={{...sy.rowSpaceEvenlyMgb20}}>
            <CardHome
              title="Oxygen Availability"
              reqImgPath={require('../../../assets/images/oxygen1_logo.png')}
              onPress={() => {
                // navigation.navigate('OxygenAvailability');
              }}
            />
            <CardHome
              title="Get Information"
              reqImgPath={require('../../../assets/images/mail1_logo.png')}
              onPress={() => {
                // navigation.navigate('GetInformation');
              }}
            />
          </View>
        </View>
        {/* FOOTER: TODAY'S OFFER | DIET PLAN  */}
        <Text style={{...sy.bgSbTTxt, ...styles.titleText}}>Today's Offer</Text>
        <View style={{...styles.dietPlanWrapper}}>
          <View>
            <Text style={{...styles.dietTitleText}}>
              Get your <Text style={{color: '#A00000'}}>diet</Text>
            </Text>
            <Text style={{...styles.dietTitleText}}>
              <Text style={{color: '#A00000'}}>plan</Text> free
            </Text>
          </View>
          <Image
            style={{...styles.dietImg}}
            source={require('../../../assets/images/diet_plan_img.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default HomeScreen;
