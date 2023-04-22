import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import sy from '../styles/styling';

const BackHeaderArrowBtn = props => {
  const {onPress} = props;
  return (
    <View style={{position: 'absolute', left: 15}}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <Ionicons name="arrow-back" color={sy.tClr} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default BackHeaderArrowBtn;
