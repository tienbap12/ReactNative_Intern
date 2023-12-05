import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import DeviceInfo from 'react-native-device-info';
import {getUniqueId, getManufacturer} from 'react-native-device-info';

export default function Home({navigation}) {
  useEffect(() => {}, [location, deviceName]);
  const [location, setLocation] = useState('');
  const [deviceName, setDeviceName] = useState('');
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 0,
    })
      .then(location => {
        console.log(location);
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
      });
    let appName = DeviceInfo.getApplicationName();
    console.log(appName);
    DeviceInfo.getDeviceName().then(deviceName => {
      console.log(deviceName);
      setDeviceName(deviceName);
    });
    DeviceInfo.getAndroidId().then(androidId => {
      console.log(androidId);
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>Home Screen</Text>
      <Text style={{color: '#000'}}>Kinh độ: {location.longitude}</Text>
      <Text style={{color: '#000'}}>Vĩ độ: {location.latitude}</Text>
      <Text style={{color: '#000'}}>Tên thiết bị: {deviceName}</Text>
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button title="Open Noti" onPress={() => navigation.navigate('Noti')} />
    </View>
  );
}

const styles = StyleSheet.create({});
