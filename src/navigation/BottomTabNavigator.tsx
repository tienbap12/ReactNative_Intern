import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Camera from '../screen/Camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bio from '../screen/Bio';
import Wallet from '../screen/Wallet';
import Store from '../screen/Store';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          fontWeight: 500,
          backgroundColor: '#ffffff',
          height: 60,
          padding: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bảng tin') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Bio') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          } else if (route.name === 'Cửa hàng') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'Ví') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2734c8',
        tabBarInactiveTintColor: '#000000',
      })}>
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Bảng tin" component={Camera} />
      <Tab.Screen name="Bio" component={Bio} />
      <Tab.Screen name="Cửa hàng" component={Store} />
      <Tab.Screen name="Ví" component={Wallet} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
