import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Platform,
  Linking,
} from 'react-native';
import styling from '../../../styles/Events/Events_Style';
import sy from '../../../styles/styling';

import {useNavigation} from '@react-navigation/native';

import {bloodAvailabilityData} from '../../../data/hospitalData';
import BackHeaderArrowBtn from '../../../components/BackHeaderArrowBtn';
import CardBloodAvailability from '../../../components/Cards/CardBloodAvailability';
import ActivityIndicatorScreen from '../../../components/ActivityIndicators/ActivityIndicatorScreen';

const BloodAvailabilityScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState(bloodAvailabilityData);
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(true);

  const dialContact = mobileNo => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${mobileNo}`;
    } else {
      phoneNumber = `telprompt:${mobileNo}`;
    }
    Linking.openURL(phoneNumber);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Blood Availability</Text>
      </View>
      {isLoadingScreen ? (
        <ActivityIndicatorScreen />
      ) : (
        <FlatList
          data={data}
          renderItem={({index, item}) => {
            console.log(item);
            return (
              <CardBloodAvailability
                name={item.name}
                status={item.status}
                contact={item.contact}
                location={item.location}
                onPressBtn={() => {
                  dialContact(item.contact);
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 80}} // bottom spacing, end of list
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create(styling);

export default BloodAvailabilityScreen;
