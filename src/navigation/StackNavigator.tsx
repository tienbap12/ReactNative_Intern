import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Camera from '../screen/Camera'
import Noti from '../screen/Noti'
import BottomTabNavigator from './BottomTabNavigator'
import Store from '../screen/Store'
import Login from '../screen/Login'
import SignUp from '../screen/SignUp'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={BottomTabNavigator} />
      <Stack.Screen name='Camera' component={Camera} />
      <Stack.Screen name='Noti' component={Noti} />
      <Stack.Screen name='Store' component={Store} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={SignUp} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
