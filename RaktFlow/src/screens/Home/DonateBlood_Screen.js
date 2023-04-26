import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import styling from '../../styles/Home/DonateBlood_Style';
import sy from '../../styles/styling';

import {useNavigation} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {axiosDonateBloodListGetRequest} from '../../api/axios_requests';

import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn';
import CardDonateBlood from '../../components/Cards/CardDonateBlood';
import ActivityIndicatorScreen from '../../components/ActivityIndicators/ActivityIndicatorScreen';

const DonateBloodScreen = () => {
  const navigation = useNavigation();
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(true);
  const [resData, setResData] = React.useState([]);
  // API
  const handleGetDonateBloodList = async () => {
    try {
      const response = await axiosDonateBloodListGetRequest(accessToken);
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
    handleGetDonateBloodList();
    // for (let item of resData) {
    //   console.log(item);
    // }
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerWrapper}}>
        <BackHeaderArrowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={{...sy.md2SbTTxt}}>Donate Blood</Text>
      </View>
      {isLoadingScreen ? (
        <ActivityIndicatorScreen />
      ) : (
        <FlatList
          data={resData}
          renderItem={({index, item}) => {
            console.log(item);
            return (
              <CardDonateBlood
                patientName={`${item.patient.first_name} ${item.patient.last_name}`}
                bloodGroup={item.blood_group}
                location={item.location}
                status={item.status}
                onPressBtn={() => {
                  navigation.navigate('PatientDonateDetails');
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

export default DonateBloodScreen;
