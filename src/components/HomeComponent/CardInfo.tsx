import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function CardInfo() {
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
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  tienbap12
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Birthday</Text>
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  24/09/2001
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Country</Text>
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  Binh Thuan
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>City</Text>
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  Sai Gon
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Phone</Text>
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  0903192469
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
            <View style={[styles.infoGroup, styles.flexInfo]}>
              <Text style={styles.textInfo}>Email</Text>
              <View style={[styles.infoGroup, { gap: 10 }]}>
                <Text numberOfLines={1} style={styles.textInfo}>
                  tienbap12@gmail.com
                </Text>
                <FontAwesome name='edit' size={20} color='#fff' />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: '50%',
              display: 'flex',
              alignItems: 'flex-end',
              margin: 10,
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.userInfoRight}>
              <Image
                source={require('../../../Assets/img/qrcode.png')}
                style={{
                  width: 74,
                  height: 74,
                  borderWidth: 1,
                  borderColor: '#fff',
                  borderRadius: 8,
                  padding: 5,
                }}
              />
              <Text style={[styles.textUserName]}>@tienbap12</Text>
            </View>
            <Image
              source={require('../../../Assets/img/logo-lite-white.png')}
              style={{ width: 38, height: 20 }}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  infoContainer: {
    borderRadius: 30,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    resizeMode: 'cover',
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden', // This is important to make sure the borderRadius works
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
    width: 70,
  },
  userInfo: {
    display: 'flex',
    gap: 15,
    flex: 1,
    width: '50%',
  },
  textUserName: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    // width: 100,
    fontSize: 12,
  },
  userInfoRight: {
    flex: 1,
  },
})
