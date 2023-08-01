import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import sy from '../../styles/styling';

const ActivityIndicatorSmBtn = () => {
  return (
    <View style={{...styles.wrapper}}>
      <ActivityIndicator size={16} color={sy.wClr} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ActivityIndicatorSmBtn;
