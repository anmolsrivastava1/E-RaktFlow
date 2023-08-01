import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import styling from '../../styles/Profile/Profile_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {toggleUserLoggedIn} from '../../redux/reducer';

import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';
import LabelVertical from '../../components/Labels/LabelVertical';

const ProfileScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {firstName, lastName, email} = useSelector(state => state.globalState);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Profile</Text>
      </View>
      <View style={{...styles.bodyWrapper}}>
        {/* Header Details  */}
        <View style={{...styles.headerDetails}}>
          <Image
            alt="avatar"
            source={require('../../../assets/images/avatar_logo.png')}
            style={{height: 75, width: 75}}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
            <Text style={{...sy.smRgHyperLinkTxt}}>{'Change Password >'}</Text>
          </TouchableOpacity>
        </View>
        {/* Details  */}
        <View style={{...styles.detailsWrapper}}>
          <LabelVertical
            title="Full Name"
            value={`${firstName} ${lastName}`}
            isVerified={false}
          />
          <LabelVertical
            title="Email Id"
            value={`${email}`}
            isVerified={true}
          />
          <Text style={{...sy.rgMdStTxt, marginTop: 10, marginBottom: 5}}>
            My Requests
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('MyBloodRequest');
            }}>
            <Text style={{...sy.smRgHyperLinkTxt, fontSize: 16}}>
              {'Blood Requests >'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('MyOxygenRequest');
            }}>
            <Text style={{...sy.smRgHyperLinkTxt, fontSize: 16}}>
              {'Oxygen Requests >'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Logout btn  */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            dispatch(toggleUserLoggedIn());
          }}
          style={{...styles.btnWrap}}>
          <Text style={{...styles.btn}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default ProfileScreen;
