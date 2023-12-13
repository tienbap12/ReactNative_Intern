import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GetLocation from 'react-native-get-location'
import DeviceInfo from 'react-native-device-info'
import { getUniqueId, getManufacturer } from 'react-native-device-info'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CardInfo from '../components/HomeComponent/CardInfo'
import CardThumb from '../components/HomeComponent/CardThumb'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import Icon from '../components/Icons/Icons'

export default function Home({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header onMenuPress={() => setModalVisible(true)} />
        <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 10 }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 50,
            height: 50,
            borderRadius: 8,
            borderColor: '#2734c8',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name='person-circle-outline' size={30} color='#000' />
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: '#000' }}>tienbap12</Text>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 5,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Icon name='wallet2' />
              <TouchableOpacity
                style={{
                  borderColor: '#2734c8',
                  borderWidth: 1.5,
                  borderRadius: 5,
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ color: '#2734c8', fontSize: 12 }}>Connect Wallet</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#f7f7f7',
                  padding: 10,
                  gap: 10,
                }}
              >
                <Icon name='guard' />
                <Text style={{ color: '#808080' }}>KYC</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#f7f7f7',
                  padding: 8,
                }}
              >
                <Icon name='edit' />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <CardInfo />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textHeading}>NFT Passport Cards</Text>
      </View>
      <View style={{ flex: 1 }}>
        <CardThumb navigation={navigation} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', padding: 16, position: 'relative' },
  textHeading: {
    color: '#2734c8',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})
