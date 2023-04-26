import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import sy from '../../styles/styling';

const CardHome = props => {
  const {title, reqImgPath, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={{...styles.cardWrapper}}>
        <Image style={{marginBottom: 5}} source={reqImgPath} />
        <Text style={{...styles.cardText}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    ...sy.alignJustify,
    height: 130,
    width: 160,
    backgroundColor: sy.wClr,
    borderRadius: 15,
    shadowColor: '#656565',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  cardText: {
    ...sy.rgMdSTxt,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

export default CardHome;
