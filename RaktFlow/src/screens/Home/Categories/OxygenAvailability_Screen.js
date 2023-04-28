import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import styling from '../../../styles/Home/DonateBlood_Style';
import sy from '../../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {axiosProvideOxygenListGetRequest} from '../../../api/axios_requests';

import CardProvideOxygen from '../../../components/Cards/CardProvideOxygen';
import BackHeaderArrowBtn from '../../../components/BackHeaderArrowBtn';
import ActivityIndicatorScreen from '../../../components/ActivityIndicators/ActivityIndicatorScreen';

const OxygenAvailabilityScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(true);
  const [resData, setResData] = React.useState([]);
  // API
  const handleGetProvideOxygenList = async () => {
    try {
      const response = await axiosProvideOxygenListGetRequest(accessToken);
      //   console.log(response.data);
      const tmpData = response.data;
      setResData(tmpData.reverse());
      setIsLoadingScreen(false);
    } catch (error) {
      console.log(`Couldn't get donate blood list!!`);
      console.log(error);
    }
  };
  React.useEffect(() => {
    handleGetProvideOxygenList();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Provide Oxygen</Text>
      </View>
      {isLoadingScreen ? (
        <ActivityIndicatorScreen />
      ) : (
        <FlatList
          data={resData}
          renderItem={({index, item}) => {
            console.log(item);
            return (
              <CardProvideOxygen
                patientName={`${item.patient.first_name} ${item.patient.last_name}`}
                reqDate={item.requirement_date}
                location={item.oxygen_location}
                status={item.oxygen_status}
                onPressBtn={() => {
                  navigation.navigate('PatientOxygenDetails', {
                    uuid: item.uuid,
                  });
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

export default OxygenAvailabilityScreen;
