import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera'
import Header from '../components/Header/Header'
interface CameraaProps {}
const Cameraa: React.FC<CameraaProps> = () => {
  const camera = useRef<Camera>(null)
  const device = useCameraDevice('back')
  const { requestPermission } = useCameraPermission()
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
    },
  })

  useEffect(() => {
    requestPermission()
  }, [requestPermission])

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Device not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.cameraContainer}>
        <Camera
          ref={camera}
          style={styles.cameraPreview}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  headerContainer: {
    marginBottom: 16,
  },
  cameraContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
  cameraPreview: {
    ...StyleSheet.absoluteFillObject,
  },
})
export default Cameraa
