import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const CustomTextInput = props => {
  const {title, placeholder, value, setValue} = props;
  return (
    <View>
      <Text style={{...styles.subTitleText}}>{title}</Text>
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
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 15,
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: '3%',
    width: '95%',
  },
  subTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1B2D48',
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default CustomTextInput;
