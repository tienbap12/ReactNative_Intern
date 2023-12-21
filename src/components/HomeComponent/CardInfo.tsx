import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
interface CardInfoProps {}
const CardInfo: React.FC<CardInfoProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../Assets/img/card-info.png')}
          style={styles.infoContainer}
        >
          <View style={styles.userInfo}>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Name</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  tienbap12
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Name</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  Tiến Ngô
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Birthday</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  24/09/2001
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Country</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  Việt Nam
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>City</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  Ho Chi Minh
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Phone</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  0903192469
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Email</Text>
              <View style={[styles.infoGroup, styles.iconGroup]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  tienbap12@gmail.com
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.qrCodeContainer}>
              <Image
                source={require('../../../Assets/img/qrcode.png')}
                style={styles.qrCodeImage}
              />
              <Text style={styles.textUserName}>@tienbap12</Text>
            </View>
            <Image
              source={require('../../../Assets/img/logo-lite-white.png')}
              style={styles.logoImage}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    resizeMode: 'cover',
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden', // This is important to make sure the borderRadius works
  },
  infoGroup: {
    flexDirection: 'row',
  },
  flexInfo: {
    justifyContent: 'space-between',
  },
  iconGroup: {
    gap: 10,
  },
  textInfo: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
    width: 70,
  },
  userInfo: {
    flexDirection: 'column',
    gap: 10,
    flex: 1,
    width: '50%',
  },
  rightContainer: {
    flex: 1,
    width: '50%',
    alignItems: 'flex-end',
    margin: 10,
    justifyContent: 'space-between',
  },
  qrCodeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qrCodeImage: {
    width: 74,
    height: 74,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 5,
  },
  textUserName: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
  },
  logoImage: {
    width: 38,
    height: 20,
  },
})
export default CardInfo
