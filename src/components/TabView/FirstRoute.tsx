import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './StyleRoute'

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
      renderItem={({ item }) => (
        <View style={styles.cardItem}>
          <View style={styles.cardItemLeft}>
            <FastImage
              source={require('../../../Assets/img/card2.png')}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
            />
          </View>
          <View style={styles.cardItemRight}>
            <Text style={styles.cardName}>WISA Signature</Text>
            <Text style={styles.cardPrice}>$25</Text>
            <View style={styles.cardRank}>
              <Text style={styles.textCardRank}>PREMIUM CARD</Text>
            </View>
            <TouchableOpacity style={styles.addCartBtn}>
              <Text style={styles.textBtn}>THÊM VÀO GIỎ HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
)

export default FirstRoute
