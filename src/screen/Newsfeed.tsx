import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'

export default function Newsfeed() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <View>
        <Header />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../Assets/img/coming.png')} width={300} height={300} />
        <Text style={{ color: '#3427c8', fontSize: 30 }}>Coming soon</Text>
        <Text style={{ color: '#808080', fontSize: 16 }}>
          We are going to launch our feature very soon.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
