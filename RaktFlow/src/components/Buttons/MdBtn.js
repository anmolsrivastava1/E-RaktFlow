import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import sy from '../../styles/styling';

const MdBtn = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{width: '45%'}}>
      <View style={{...styles.button}}>
        <Text style={{...styles.buttonText}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: sy.pClr,
    alignItems: 'center',
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: sy.wClr,
    fontSize: sy.smTxt,
    fontFamily: sy.popM,
  },
});

export default MdBtn;
