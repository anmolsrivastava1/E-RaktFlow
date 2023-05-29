import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import styling from '../../../styles/Events/Events_Style';
import sy from '../../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {axiosMyRequestsGetRequest} from '../../../api/axios_requests';

import BackHeaderArrowBtn from '../../../components/BackHeaderArrowBtn';
import CardProvideOxygen from '../../../components/Cards/CardProvideOxygen';
import ActivityIndicatorScreen from '../../../components/ActivityIndicators/ActivityIndicatorScreen';

const MyOxygenRequestScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(true);
  const [resData, setResData] = React.useState([]);
  // API
  const handleGetMyOxygenList = async () => {
    try {
      const response = await axiosMyRequestsGetRequest(accessToken);
      //   console.log(response.data);
      const tmpData = response.data.data.oxygen_requests;
      setResData(tmpData.reverse());
      setIsLoadingScreen(false);
    } catch (error) {
      console.log(`Couldn't get my oxygen requests!!`);
      console.log(error);
    }
  };
  React.useEffect(() => {
    handleGetMyOxygenList();
    // for (let item of resData) {
    //   console.log(item);
    // }
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>My Oxygen Requests</Text>
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
                isMyRequest={true}
                onPressBtn={() => {
                  navigation.navigate('PatientDonateDetails', {
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

export default MyOxygenRequestScreen;
