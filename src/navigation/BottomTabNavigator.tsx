import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import Icon from '../components/Icons/Icons'
// import Camera from '../screen/Camera'
import Bio from '../screen/Bio'
import Wallet from '../screen/Wallet'
import Store from '../screen/Store'
import Newsfeed from '../screen/Newsfeed'
import Login from '../screen/Login'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  const tabIcons = {
    home: 'home',
    newsfeed: 'newsfeed',
    bio: 'bio',
    store: 'store',
    wallet: 'wallet',
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          padding: 5,
        },
      })}
    >
      <Tab.Screen
        name='Trang chủ'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.home} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Bảng tin'
        component={Newsfeed}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.newsfeed} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Bio'
        component={Bio}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.bio} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Cửa hàng'
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.store} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Ví'
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.wallet} focused={focused} />,
        }}
      />

      <Tab.Screen
        name='Login'
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={tabIcons.wallet} focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
