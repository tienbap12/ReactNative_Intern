import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
//   useCodeScanner,
// } from 'react-native-vision-camera';

export default function Cameraa({navigation}) {
  // const camera = useRef<Camera>(null);
  // const device = useCameraDevice('back');
  // const {hasPermission, requestPermission} = useCameraPermission();
  // const photo = camera.current?.takePhoto();
  // const codeScanner = useCodeScanner({
  //   codeTypes: ['qr', 'ean-13'],
  //   onCodeScanned: codes => {
  //     console.log(`Scanned ${codes.length} codes!`);
  //   },
  // });
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  // if (device == null)
  //   return (
  //     <View>
  //       <Text>Device not found</Text>
  //     </View>
  //   );
  return (
    <View>
      <Text>Device not found</Text>
    </View>
    // <Camera
    //   ref={camera}
    //   style={StyleSheet.absoluteFill}
    //   device={device}
    //   isActive={true}
    //   photo={true}
    //   // codeScanner={codeScanner}
    // />
  );
}

const styles = StyleSheet.create({});
