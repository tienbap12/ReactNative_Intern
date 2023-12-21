import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Icon from '../components/Icons/Icons'
import SearchBar from '../components/Header/SearchBar'
import TabViewStore from '../components/TabView/TabView'
import Modal from '../components/Modal/Modal'
interface StoreProps {}
const Store: React.FC<StoreProps> = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')

  const handleSearch = (text: string) => {
    setSearchText(text)
  }
  return (
    <View style={styles.container}>
      <View>
        <Header onMenuPress={() => setModalVisible(true)} />
        <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder='Search...' onChangeText={handleSearch} value={searchText} />
        <TouchableOpacity>
          <Icon focused={''} name='cart' />
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
export default Store
