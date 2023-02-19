import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#999',
        tabBarActiveTintColor: '#066DE6',
        tabBarKeyboardHidesTabBar: true,
        tabBarStyle: {
          ...styles.tabsNavigator,
          backgroundColor: 'white',
          bottom: isKeyboardShown ? -10 : 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, focused}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} color={color} size={26} />;
          },
        }}
        children={() => <HomeScreen />}
      />
      <Tab.Screen
        name="Events"
        options={{
          tabBarIcon: ({color, focused}) => {
            let iconName = focused ? 'calendar' : 'calendar-outline';
            return <Ionicons name={iconName} color={color} size={28} />;
          },
        }}
        children={() => <EventsScreen />}
      />
      <Tab.Screen
        name="Chat"
        options={{
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
        name="Profiles"
        options={{
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
