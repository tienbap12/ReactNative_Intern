import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from '../Icons/Icons'

export default function SearchBar({ placeholder, onChangeText, value }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 30,
        flex: 1,
      }}
    >
      <Icon name='search' />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{ flex: 1, height: 35, paddingLeft: 10, width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
