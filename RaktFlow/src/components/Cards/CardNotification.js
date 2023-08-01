import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import sy from '../../styles/styling';

import SmBtn from '../Buttons/SmBtn';

const CardNotification = props => {
  const {onPressBtn} = props;

  return (
    <View>
      <View style={{...styles.cardWrapper}}>
        <View style={{...styles.leftWrapper}}>
          <View
            style={{
              ...styles.statusBar,
              backgroundColor: '#20A164',
            }}></View>
          <View style={{...styles.contentWrapper}}>
            <Text style={{...styles.cardText}}>
              <Text style={{fontFamily: sy.popSB}}>Donor: </Text>
              {' Ashish Gupta'}
            </Text>
            <Text style={{...styles.cardText}}>
              <Text style={{fontFamily: sy.popSB}}>Contact: </Text>
              {' 7091551907'}
            </Text>
            <Text style={{...styles.cardText}}>
              <Text style={{fontFamily: sy.popSB}}>Location: </Text>{' '}
              {' JSSATE, NOIDA'}
            </Text>
          </View>
        </View>
        <View style={{...styles.rightWrapper}}>
          <SmBtn title={'Call'} disable={false} onPress={onPressBtn} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    ...sy.flexRowAlignSB,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
    paddingLeft: 30,
    width: '90%',
    backgroundColor: sy.wClr,
    borderRadius: 10,
    shadowColor: '#656565',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  leftWrapper: {
    ...sy.rowAlignJustify,
  },
  rightWrapper: {},
  statusBar: {
    position: 'absolute',
    height: '100%',
    width: 5,
    left: -15,
    borderRadius: 5,
  },
  cardText: {
    ...sy.smRgTTxt,
  },
});

export default CardNotification;
