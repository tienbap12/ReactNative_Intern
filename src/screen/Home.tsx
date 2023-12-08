import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import DeviceInfo from 'react-native-device-info';
import {getUniqueId, getManufacturer} from 'react-native-device-info';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardInfo from '../components/CardInfo';

export default function Home({navigation}) {
  useEffect(() => {}, [location, deviceName]);
  const [location, setLocation] = useState('');
  const [deviceName, setDeviceName] = useState('');

  // useEffect(() => {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 0,
  //   })
  //     .then(location => {
  //       console.log(location);
  //       setLocation(location);
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //     });
  //   let appName = DeviceInfo.getApplicationName();
  //   console.log(appName);
  //   DeviceInfo.getDeviceName().then(deviceName => {
  //     console.log(deviceName);
  //     setDeviceName(deviceName);
  //   });
  //   DeviceInfo.getAndroidId().then(androidId => {
  //     console.log(androidId);
  //   });
  // }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff', padding: 16}}>
      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/img/logo-lite.png')}
            style={{width: 45, height: 27}}
          />
          <View>
            <Ionicons name="menu-outline" size={45} color="#000" />
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#ccc',
              width: 50,
              height: 50,
              borderRadius: 8,
              borderColor: '#2734c8',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="person-circle-outline" size={30} color="#000" />
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              marginHorizontal: 10,
            }}>
            <Text style={{color: '#000'}}>tienbap12</Text>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 5,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Ionicons name="wallet-outline" size={20} color="#000" />
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
                  }}>
                  <Text style={{color: '#2734c8', fontSize: 12}}>
                    Connect Wallet
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#f7f7f7',
                    padding: 8,
                  }}>
                  <Ionicons name="shield-half" size={20} color="#808080" />
                  <Text>KYC</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#f7f7f7',
                    padding: 8,
                  }}>
                  <FontAwesome name="edit" color="#808080" size={20} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: '100%'}}>
        <CardInfo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
