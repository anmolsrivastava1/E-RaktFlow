import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import sy from '../../styles/styling';

const CustomTextInput = props => {
  const {title, placeholder, value, setValue} = props;
  return (
    <View>
      <Text style={{...styles.titleText}}>{title}</Text>
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: 'white',
        }}>
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
    marginBottom: 15,
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
    ...sy.smSbTTxt,
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default CustomTextInput;
