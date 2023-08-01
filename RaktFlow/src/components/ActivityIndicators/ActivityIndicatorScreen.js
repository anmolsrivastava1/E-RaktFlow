import React from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import sy from '../../styles/styling';

const windowHeight = Dimensions.get('window').height;

const ActivityIndicatorScreen = () => {
  return (
    <View style={{...styles.wrapper}}>
      <ActivityIndicator size={50} color={sy.pClr} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...sy.alignJustify,
    flex: 1,
    height: windowHeight * 0.85,
  },
});

export default ActivityIndicatorScreen;
