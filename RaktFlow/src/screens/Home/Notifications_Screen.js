import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';
import styling from '../../styles/Events/Events_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';
import CardNotification from '../../components/Cards/CardNotification';

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const dialContact = mobileNo => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${mobileNo}`;
    } else {
      phoneNumber = `telprompt:${mobileNo}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Notifications</Text>
      </View>
      <View style={{...styles.bodyWrapper}}>
        <Text style={{...sy.mdMdTTxt, alignSelf: 'center'}}>
          1 new notification!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',
          alignSelf: 'center',
          height: 2,
          width: '90%',
          marginBottom: 10,
        }}></View>
      <CardNotification
        onPressBtn={() => {
          dialContact('7091551907');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default NotificationsScreen;
