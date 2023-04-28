import React from 'react';
import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {} from '../../redux/reducer';

// SCREENS
import HomeScreen from '../../screens/Home/Home_Screen';
// Home - Categories Screens
import DonateBloodScreen from '../../screens/Home/Categories/DonateBlood_Screen';
import RequestBloodScreen from '../../screens/Home/Categories/RequestBlood_Screen';
import OxygenAvailabilityScreen from '../../screens/Home/Categories/OxygenAvailability_Screen';
import BloodAvailabilityScreen from '../../screens/Home/Categories/BloodAvailability_Screen';
import RequestOxygenScreen from '../../screens/Home/Categories/RequestOxygen_Screen';
import BookAmbulanceScreen from '../../screens/Home/Categories/BoolAmbulance_Screen';
import NearbyHospitalsScreen from '../../screens/Home/Categories/NearbyHospitals_Screen';
import GetInformationScreen from '../../screens/Home/Categories/GetInformation_Screen';
// Other Screens
import PatientDonateDetailsScreen from '../../screens/Home/PatientDonateDetails_Screen';
import PatientOxygenDetailsScreen from '../../screens/Home/PatientOxygenDetails_Screen';
import NotificationsScreen from '../../screens/Home/Notifications_Screen';
import GetDietPlanScreen from '../../screens/Home/GetDietPlan_Screen';

const Stack = createNativeStackNavigator();

const HomeTabStackNavigator = () => {
  // REDUX - DISPATCH & SELECTOR
  const dispatch = useDispatch();
  const {} = useSelector(state => state.globalState);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Home - Categories Screens  */}
      <Stack.Screen name="DonateBlood" component={DonateBloodScreen} />
      <Stack.Screen name="RequestBlood" component={RequestBloodScreen} />
      <Stack.Screen
        name="OxygenAvailability"
        component={OxygenAvailabilityScreen}
      />
      <Stack.Screen
        name="BloodAvailability"
        component={BloodAvailabilityScreen}
      />
      <Stack.Screen name="RequestOxygen" component={RequestOxygenScreen} />
      <Stack.Screen name="BookAmbulance" component={BookAmbulanceScreen} />
      <Stack.Screen name="NearbyHospitals" component={NearbyHospitalsScreen} />
      <Stack.Screen name="GetInformation" component={GetInformationScreen} />
      {/* Home - Other Screens */}
      <Stack.Screen
        name="PatientDonateDetails"
        component={PatientDonateDetailsScreen}
      />
      <Stack.Screen
        name="PatientOxygenDetails"
        component={PatientOxygenDetailsScreen}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="GetDietPlan" component={GetDietPlanScreen} />
    </Stack.Navigator>
  );
};

export default HomeTabStackNavigator;
