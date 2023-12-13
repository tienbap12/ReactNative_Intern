import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderLogin from '../components/Header/HeaderLogin'
import LinearGradient from 'react-native-linear-gradient'

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <HeaderLogin />
      </View>
      <View style={{ alignItems: 'center' }}>
        <LinearGradient
          colors={['#ff7e5f', '#feb47b']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 5, marginTop: 60 }}
        >
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>
            Launch your bio in seconds
          </Text>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
})
