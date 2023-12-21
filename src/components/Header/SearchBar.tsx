import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from '../Icons/Icons'

export default function SearchBar({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <Icon name='search' style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    flex: 1,
  },
  icon: {
    // Add any specific styles for the icon if needed
  },
  input: {
    flex: 1,
    height: 35,
    paddingLeft: 10,
    width: '100%',
  },
})
