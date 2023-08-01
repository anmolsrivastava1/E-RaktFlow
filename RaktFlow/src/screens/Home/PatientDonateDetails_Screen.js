import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  Platform,
} from 'react-native';
import styling from '../../styles/Home/PateintDonateDetails_Style.js';
import sy from '../../styles/styling.js';

import {useNavigation, useRoute} from '@react-navigation/native';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
// AXIOS
import {axiosPatientDetailGetRequest} from '../../api/axios_requests.js';

import BackHeaderArrowBtn from '../../components/BackHeaderArrowBtn.js';
import MdBtn from '../../components/Buttons/MdBtn.js';
import MdNegBtn from '../../components/Buttons/MdNegBtn.js';
import ActivityIndicatorScreen from '../../components/ActivityIndicators/ActivityIndicatorScreen.js';

const PatientDonateDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {uuid} = route.params;
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.globalState);
  // STATES
  const [isLoadingScreen, setIsLoadingScreen] = React.useState(true);
  const [resData, setResData] = React.useState(null);
  const [isDetailsSentToPatient, setIsDetailsSentToPatient] =
    React.useState(false);
  // API
  const handleGetPatientDetails = async () => {
    if (uuid !== null) {
      try {
        const response = await axiosPatientDetailGetRequest(accessToken, uuid);
        //   console.log(response.data);
        setResData(response.data);
        setIsLoadingScreen(false);
      } catch (error) {
        console.log(`Couldn't get patient's data!!`);
        console.log(error);
      }
    } else {
      console.log('No uuid found!!');
    }
  };
  React.useEffect(() => {
    handleGetPatientDetails();
  }, []);

  const dialPatientContact = mobileNo => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${mobileNo}`;
    } else {
      phoneNumber = `telprompt:${mobileNo}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView style={{flex: 1}}>
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
        <View style={{...styles.bodyWrapper}}>
          {/* Header Details  */}
          <View style={{...sy.flexRow, marginBottom: 30}}>
            <Image
              alt="avatar"
              source={require('../../../assets/images/avatar_logo.png')}
              style={{height: 80, width: 80, marginRight: 20}}
            />
            <View>
              <Text style={{...sy.smRgTTxt}}>
                {resData.patient.first_name} {resData.patient.last_name}
              </Text>
              <Text style={{...sy.smRgTTxt}}>
                Blood group required:{' '}
                <Text style={{color: '#F52D56'}}>{resData.blood_group}</Text>
              </Text>
              <Text style={{...sy.exSmRgStTxt}}>
                Date posted: {resData.patient.created.slice(0, 10)}
              </Text>
            </View>
          </View>
          {/* Other Details  */}
          <View style={{...styles.detailsWrapper}}>
            <Text style={{...sy.mdMdTTxt}}>Details</Text>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Age</Text>
              <Text style={{...sy.smRgTTxt}}>{resData.patient.age} years</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Blood units required</Text>
              <Text style={{...sy.smRgTTxt}}>{resData.unit} units</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Date of requirement</Text>
              <Text style={{...sy.smRgTTxt}}>{resData.requirement_date}</Text>
            </View>
          </View>
          {/* Contact Details  */}
          <View style={{...styles.detailsWrapper}}>
            <Text style={{...sy.mdMdTTxt}}>Contact details</Text>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Mobile no</Text>
              <Text style={{...sy.smRgTTxt}}>{resData.mobile}</Text>
            </View>
            <View style={{...styles.detailsLog}}>
              <Text style={{...sy.smRgStTxt}}>Location</Text>
              <Text style={{...sy.smRgTTxt}}>{resData.location}</Text>
            </View>
          </View>
          <View style={{...styles.actionWrapper}}>
            <MdNegBtn
              title="Send details"
              onPress={() => {
                setTimeout(() => {
                  setIsDetailsSentToPatient(true);
                }, 1000);
                setTimeout(() => {
                  setIsDetailsSentToPatient(false);
                }, 4000);
              }}
            />
            <MdBtn
              title="Call"
              onPress={() => {
                dialPatientContact(resData.mobile);
              }}
            />
          </View>
          {isDetailsSentToPatient ? (
            <Text
              style={{...sy.rgMdTTxt, color: '#20A164', textAlign: 'center'}}>
              ✅ Details Sent To Patient
            </Text>
          ) : null}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create(styling);

export default PatientDonateDetailsScreen;
