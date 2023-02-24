import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {firstName} = useSelector(state => state.globalState);
  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.headerWrapper}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{...styles.avatarWrapper}}>
            <Ionicons name={'person'} color={'#1B2D48'} size={32} />
          </View>
          <View style={{...styles.usernameWrapper}}>
            <Text style={{...styles.subHeaderText}}>Welcome,</Text>
            <Text style={{...styles.userNameText}}>{`${firstName} !`}</Text>
          </View>
        </View>
        <View style={{...styles.rightHeaderWrapper}}>
          <View style={{...styles.alertWrapper}}>
            <Ionicons
              name={'notifications-outline'}
              color={'#1B2D48'}
              size={26}
            />
          </View>
        </View>
      </View>
      <View style={{...styles.contentWrapper}}>
        <Text style={{...styles.titleText}}>Categories</Text>
        <View style={{...styles.categoriesWrapper}}>
          {/* LINE ONE */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 20,
            }}>
            <View style={{...styles.cardWrapper}}>
              <Image
                style={{...styles.cardImg}}
                source={require('../../../assets/images/patient_logo.png')}
              />
              <Text style={{...styles.cardText}}>Donate Blood</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('RequestBlood');
              }}>
              <View style={{...styles.cardWrapper}}>
                <Image
                  style={{...styles.cardImg}}
                  source={require('../../../assets/images/blood1_logo.png')}
                />
                <Text style={{...styles.cardText}}>Request Blood</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* LINE TWO */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 20,
            }}>
            <View style={{...styles.cardWrapper}}>
              <Image
                style={{...styles.cardImg}}
                source={require('../../../assets/images/ambulance_logo.png')}
              />
              <Text style={{...styles.cardText}}>Book Ambulance</Text>
            </View>
            <View style={{...styles.cardWrapper}}>
              <Image
                style={{...styles.cardImg}}
                source={require('../../../assets/images/hospital_logo.png')}
              />
              <Text style={{...styles.cardText}}>Hospital Details</Text>
            </View>
          </View>
          {/* LINE THREE */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 20,
            }}>
            <View style={{...styles.cardWrapper}}>
              <Image
                style={{...styles.cardImg}}
                source={require('../../../assets/images/oxygen1_logo.png')}
              />
              <Text style={{...styles.cardText}}>Oxygen Availability</Text>
            </View>
            <View style={{...styles.cardWrapper}}>
              <Image
                style={{...styles.cardImg}}
                source={require('../../../assets/images/mail1_logo.png')}
              />
              <Text style={{...styles.cardText}}>Get Information</Text>
            </View>
          </View>
        </View>
        <Text style={{...styles.titleText}}>Today's Offer</Text>
        <View style={{...styles.dietPlanWrapper}}>
          <View style={{...styles.dietTextWrapper}}>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  avatarWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#8992AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameWrapper: {
    marginLeft: 15,
  },
  alertWrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8992AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingBottom: 30,
  },
  categoriesWrapper: {},
  cardWrapper: {
    height: 130,
    width: 160,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#656565',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  dietPlanWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#E5F1FF',
    shadowColor: '#656565',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8992AB',
  },
  userNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B2D48',
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 26,
    color: '#1B2D48',
    marginBottom: 10,
    marginLeft: 20,
  },
  cardText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#2F327D',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  dietTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B2D48',
  },
});

export default HomeScreen;

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
