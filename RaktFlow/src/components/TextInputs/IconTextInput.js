import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import sy from '../../styles/styling';

const IconTextInput = props => {
  const {title, placeholder, value, setValue, iconName} = props;
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{...styles.titleText, marginBottom: 5}}>{title}</Text>
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: 'white',
        }}>
        <Ionicons name={iconName} color={'#888'} size={20} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#888'}
          selectionColor={'#888'}
          returnKeyType={'next'}
          value={value}
          onChangeText={value => {
            setValue(value);
          }}
          onSubmitEditing={value => {}}
          style={{...styles.textInput}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...sy.flexRow,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  textInput: {
    ...sy.rgRgTTxt,
    marginHorizontal: '3%',
    width: '95%',
  },
  titleText: {
    ...sy.rgMdTTxt,
    marginBottom: 5,
  },
});

export default IconTextInput;
