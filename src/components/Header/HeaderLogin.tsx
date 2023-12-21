import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '../Icons/Icons'
import Login from '../../screen/Login'
import SignUp from '../../screen/SignUp'

export default function HeaderLogin({ onSignUpPress, navigation }) {
  const [currentScreen, setCurrentScreen] = useState('login')

  const SCREENS = {
    LOGIN: 'login',
    SIGN_UP: 'signUp',
  }

  const handleSignUpPress = () => {
    setCurrentScreen(SCREENS.SIGN_UP)
    // navigation.navigate('signup')
  }

  const handleLoginPress = () => {
    setCurrentScreen(SCREENS.LOGIN)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Icon name='logoName' />
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TouchableOpacity
            style={currentScreen === 'signUp' ? styles.activeBtn : styles.inactiveBtn}
            onPress={handleSignUpPress}
          >
            <Text style={currentScreen === 'signUp' ? styles.activeText : styles.inactiveText}>
              Đăng ký
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={currentScreen === 'login' ? styles.activeBtn : styles.inactiveBtn}
            onPress={handleLoginPress}
          >
            <Text style={currentScreen === 'login' ? styles.activeText : styles.inactiveText}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {currentScreen === 'login' ? (
        <Login onSignUpPress={handleSignUpPress} />
      ) : (
        <SignUp onLoginPress={handleLoginPress} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  activeBtn: {
    backgroundColor: '#3427c8',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3427c8',
  },
  activeText: {
    color: '#fff',
    fontWeight: '900',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  inactiveBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3427c8',
  },
  inactiveText: {
    color: '#3427c8',
    fontWeight: '900',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
})
