import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from '../Icons/Icons'
export default function HeaderBio(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../Assets/img/logo-lite.png')} style={styles.logo} />
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <TouchableOpacity>
          <Icon name='goal' />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onMenuPress}>
          <Icon name='setting' />
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
  logo: { width: 45, height: 27 },
})
