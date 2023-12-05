import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

export default function Camera({navigation}) {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    requestPermission();
  }, []);
  if (device == null) {
    return (
      <View>
        <Text>Camera not found</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Text>Camera</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({});
