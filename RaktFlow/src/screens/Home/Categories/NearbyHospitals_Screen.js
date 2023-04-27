import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import styling from '../../../styles/Events/Events_Style';
import sy from '../../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import BackHeaderArrowBtn from '../../../components/BackHeaderArrowBtn';

const NearbyHospitalsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Nearby Hospitals</Text>
      </View>
      <View style={{...styles.bodyWrapper}}>
        <Text style={{...sy.mdMdTTxt, alignSelf: 'center'}}>
          No hospitals found!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default NearbyHospitalsScreen;
