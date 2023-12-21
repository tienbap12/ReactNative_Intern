import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function LoginAnimation() {
  return (
    <View>
      <LottieView
        source={require('../../../Assets/img/card_0.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <LottieView
        source={require('../../../Assets/img/card_1.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <LottieView
        source={require('../../../Assets/img/card_2.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <LottieView
        source={require('../../../Assets/img/card_3.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <LottieView
        source={require('../../../Assets/img/card_4.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
