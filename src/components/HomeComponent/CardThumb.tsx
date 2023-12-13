import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function CardThumb({ navigation }) {
  return (
    <LinearGradient
      colors={['rgb(217, 236, 255)', 'rgba(255, 255, 255, 0)']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text>Hãy tạo thẻ của bạn ngay bây giờ!</Text>
        <Image source={require('../../../Assets/img/card-thumb.png')} style={styles.cardThumb} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cửa hàng')}>
          <Text style={styles.buttonText}>Đến cửa hàng</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'column',
    alignContent: 'center',
  },
  content: {
    padding: 20,
  },
  cardThumb: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#3427c8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
  },
})
