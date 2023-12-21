import { View, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBio from '../components/Header/HeaderBio'
interface BioProps {}
const Bio: React.FC<BioProps> = () => {
  return (
    <View style={styles.container}>
      <HeaderBio />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', padding: 16 },
})
export default Bio
