import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CardInfo from '../components/HomeComponent/CardInfo'
import CardThumb from '../components/HomeComponent/CardThumb'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import Icon from '../components/Icons/Icons'

interface HomeProps {
  navigation: any
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onMenuPress={() => setModalVisible(true)} />
        <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      </View>

      <View style={styles.userInfoContainer}>
        <View style={styles.avatarContainer}>
          <Ionicons name='person-circle-outline' size={30} color='#000' />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.username}>tienbap12</Text>
          <View style={styles.walletContainer}>
            <View style={styles.walletIconContainer}>
              <Icon focused={''} name='wallet2' />
              <TouchableOpacity style={styles.connectWalletButton}>
                <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.kycEditContainer}>
              <View style={styles.kycContainer}>
                <Icon focused={''} name='guard' />
                <Text style={styles.kycText}>KYC</Text>
              </View>

              <View style={styles.editContainer}>
                <Icon focused={''} name='edit' />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardInfoContainer}>
        <CardInfo />
      </View>

      <View style={styles.nftContainer}>
        <Text style={styles.textHeading}>NFT Passport Cards</Text>
        <CardThumb navigation={navigation} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    position: 'relative',
  },
  headerContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  avatarContainer: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 8,
    borderColor: '#2734c8',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  username: {
    color: '#000',
  },
  walletContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  walletIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  connectWalletButton: {
    borderColor: '#2734c8',
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  connectWalletButtonText: {
    color: '#2734c8',
    fontSize: 12,
  },
  kycEditContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  kycContainer: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    padding: 10,
    gap: 10,
  },
  kycText: {
    color: '#808080',
  },
  editContainer: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    padding: 8,
  },
  cardInfoContainer: {
    flex: 1,
  },
  nftContainer: {
    flex: 1,
  },
  textHeading: {
    color: '#2734c8',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})

export default Home
