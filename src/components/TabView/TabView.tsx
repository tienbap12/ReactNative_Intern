import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import FirstRoute from './FirstRoute'

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text style={styles.text}>Second Tab</Text>
  </View>
)

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4caf50' }]}>
    <Text style={styles.text}>Third Tab</Text>
  </View>
)

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#2196f3' }]}>
    <Text style={styles.text}>T-Shirt Tab</Text>
  </View>
)

const initialLayout = { width: Dimensions.get('window').width }
export default function TabViewStore() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'ALL' },
    { key: 'second', title: 'Cards' },
    { key: 'third', title: 'E-Tag' },
    { key: 'fourth', title: 'T-Shirt' },
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  })

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ flex: 1 }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.label}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 170,
    alignItems: 'center',
    backgroundColor: 'rgb(248, 249, 250)',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#3427c8',
  },
  label: {
    color: '#4E4E4E',
    fontWeight: 'bold',
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  cardItemLeft: { flex: 5, justifyContent: 'center' },
  cardItemRight: {
    flex: 5,
    flexDirection: 'column',
    gap: 5,
  },
  addCartBtn: {
    backgroundColor: '#3427c8',
    alignSelf: 'flex-start',
    padding: 14,
    borderRadius: 30,
  },
  textBtn: { fontWeight: 'bold', fontSize: 14, color: '#ffffff' },
  cardRank: {
    backgroundColor: 'rgba(245, 159, 0, 0.1)',
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  textCardRank: { color: '#F59F00', fontWeight: '900' },
  cardName: { color: 'black', fontWeight: '900' },
  cardPrice: { color: 'black' },
})
