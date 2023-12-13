import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../Icons/Icons'

export default function HeaderLogin(props) {
  return (
    <View style={styles.container}>
      <Icon name='logoName' />
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onMenuPress} style={styles.loginBtn}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtn: {
    borderRadius: 20,
    backgroundColor: '#3427c8',
  },
  textSignUp: {
    color: '#808080',
  },
  textLogin: {
    color: '#fff',
    fontWeight: '900',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
})
