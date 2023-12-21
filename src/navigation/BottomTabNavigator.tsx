import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import Icon from '../components/Icons/Icons'
import Bio from '../screen/Bio'
import Wallet from '../screen/Wallet'
import Store from '../screen/Store'
import Newsfeed from '../screen/Newsfeed'
import HeaderLogin from '../components/Header/HeaderLogin'
import LottieView from 'lottie-react-native'

const Tab = createBottomTabNavigator()

const CustomTabBarIcon = ({ icon, focused }) => {
  switch (icon) {
    case 'bio':
      return (
        <LottieView
          source={require('../../Assets/img/logo-bio.json')}
          style={{ height: 60, width: 60 }}
          autoPlay
          loop
        />
      )
    default:
      return <Icon name={icon} focused={focused} />
  }
}

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
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#808080',
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name='Trang chủ'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBarIcon icon={tabIcons.home} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Bảng tin'
        component={Newsfeed}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon icon={tabIcons.newsfeed} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='Bio'
        component={Bio}
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBarIcon icon={tabIcons.bio} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Cửa hàng'
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBarIcon icon={tabIcons.store} focused={focused} />,
        }}
      />
      <Tab.Screen
        name='Ví'
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon icon={tabIcons.wallet} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='Login'
        component={HeaderLogin}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon icon={tabIcons.wallet} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
