import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../screen/Home';
import Camera from '../screen/Camera';
import Noti from '../screen/Noti';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Noti" component={Noti} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
