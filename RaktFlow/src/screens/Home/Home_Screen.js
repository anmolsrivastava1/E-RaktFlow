import React from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        <Ionicons name={'home'} color={'#066DE6'} size={46} />
        <Text style={{...styles.fontStyle}}>Home Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fontStyle: {
    fontSize: 40,
  },
  view: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

export default HomeScreen;
