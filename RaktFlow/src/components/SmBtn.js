import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import sy from '../styles/styling';

const SmBtn = props => {
  const {title, disable, onPress} = props;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} disabled={disable}>
      <View
        style={{
          ...styles.button,
          backgroundColor: disable ? sy.stClr : sy.pClr,
        }}>
        <Text style={{...styles.buttonText}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    ...sy.rgRgWTxt,
  },
});

export default SmBtn;
