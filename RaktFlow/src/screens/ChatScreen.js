import React from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = () => {
  return (
    <ScrollView style={{...styles.screen}}>
      <View style={{...styles.view}}>
        <Ionicons name={'chatbox-ellipses'} color={'#066DE6'} size={46} />
        <Text style={{...styles.fontStyle}}>Chat Screen</Text>
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
export default ChatScreen;
