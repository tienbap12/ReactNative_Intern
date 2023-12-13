import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBio from '../components/Header/HeaderBio'

export default function Bio() {
  return (
    <View style={styles.container}>
      <HeaderBio />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', padding: 16 },
})
