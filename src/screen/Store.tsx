import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Icon from '../components/Icons/Icons'
import SearchBar from '../components/Header/SearchBar'
import TabViewStore from '../components/TabView/TabView'

export default function Store() {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text) => {
    setSearchText(text)
  }
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder='Search...' onChangeText={handleSearch} value={searchText} />
        <TouchableOpacity>
          <Icon name='cart' />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TabViewStore />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#fff', paddingTop: 16 },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    alignItems: 'center',
    marginVertical: 15,
  },
  tabContainer: { flex: 1 },
})
