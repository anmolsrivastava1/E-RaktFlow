import React from 'react';
import {View, Text} from 'react-native';
import sy from '../../styles/styling';

const LabelVertical = props => {
  const {title, value, isVerified = false} = props;
  return (
    <View style={{marginVertical: 15}}>
      <View style={{...sy.flexRowAlignSB}}>
        <Text style={{...sy.rgMdStTxt, marginBottom: 5}}>{title}</Text>
        {isVerified ? (
          <Text
            style={{
              ...sy.smSbTTxt,
              color: '#177548',
              backgroundColor: '#E6F7ED',
              paddingVertical: 4,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}>
            Verified
          </Text>
        ) : null}
      </View>

      <Text style={{...sy.rgRgTTxt}}>{value}</Text>
    </View>
  );
};

export default LabelVertical;
