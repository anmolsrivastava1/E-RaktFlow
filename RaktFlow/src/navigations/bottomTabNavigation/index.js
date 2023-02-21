import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/Home/HomeScreen';
import EventsScreen from '../../screens/Events/EventsScreen';
import ChatScreen from '../../screens/Chat/ChatScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = props => {
  const {} = props;
  const [isKeyboardShown, setIsKeyboardShown] = React.useState(false);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#999',
        tabBarActiveTintColor: '#066DE6',
        tabBarKeyboardHidesTabBar: true,
        tabBarStyle: {
          ...styles.tabsNavigator,
          backgroundColor: 'white',
          // bottom: isKeyboardShown ? -50 : 0,
          display: isKeyboardShown ? 'none' : 'flex',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} color={color} size={26} />;
          },
        }}
        children={() => <HomeScreen />}
      />
      <Tab.Screen
        name="EventsStack"
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color, focused}) => {
            let iconName = focused ? 'calendar' : 'calendar-outline';
            return <Ionicons name={iconName} color={color} size={28} />;
          },
        }}
        children={() => <EventsScreen />}
      />
      <Tab.Screen
        name="ChatStack"
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, focused}) => {
            let iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
            return <Ionicons name={iconName} color={color} size={26} />;
          },
        }}
        children={() => <ChatScreen />}
      />
      <Tab.Screen
        name="ProfileStack"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => {
            let iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} color={color} size={28} />;
          },
        }}
        children={() => <ProfileScreen />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsNavigator: {},
});

export default TabsNavigator;
