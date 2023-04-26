import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import sy from '../../styles/styling';

const ActivityIndicatorBgBtn = () => {
  return (
    <View style={{...styles.wrapper}}>
      <ActivityIndicator size={30} color={sy.wClr} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: sy.pClr,
    alignItems: 'center',
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
  },
});

export default ActivityIndicatorBgBtn;
