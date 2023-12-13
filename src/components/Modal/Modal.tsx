import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ReactNativeModal } from 'react-native-modal'
import Icon from '../Icons/Icons'
import SettingItem from './SettingItem'

export default function Modal(props) {
  const PressShowLog = () => {
    console.log('hehe')
  }
  return (
    <View style={{ flex: 1 }}>
      <ReactNativeModal
        isVisible={props.isVisible}
        animationIn={'slideInUp'}
        animationInTiming={500}
        style={{ paddingBottom: 0 }}
      >
        <ScrollView
          style={{
            height: '80%',
            position: 'absolute',
            width: '100%',
            bottom: -20,
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            padding: 10,
          }}
        >
          <View
            style={{
              margin: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <View></View>
            <Text style={{ color: '#000', fontSize: 22, fontWeight: '900' }}>Cài đặt chung</Text>
            <TouchableOpacity onPress={props.onClose}>
              <Icon name='close' />
            </TouchableOpacity>
          </View>
          <View style={styles.listSettings}>
            <SettingItem
              icon='language'
              label='Ngôn ngữ'
              value='Tiếng Việt'
              onPress={PressShowLog}
            />
            <SettingItem icon='user' label='Kết nối' value='' onPress={() => {}} />
            <SettingItem icon='affiliate' label='Affliate' value='' onPress={() => {}} />
            <SettingItem icon='www' label='Tùy chỉnh tên miền' value='' onPress={() => {}} />
            <SettingItem icon='receipt' label='Đơn hàng của bạn' value='' onPress={() => {}} />
          </View>
          <View style={styles.listSettingBelow}>
            <SettingItem icon='userguide' label='Hướng dẫn sử dụng' value='' onPress={() => {}} />
            <SettingItem icon='form' label='Biểu mẫu yêu cầu' value='' onPress={() => {}} />
            <SettingItem icon='logout' label='Đăng xuất' value='' onPress={() => {}} />
          </View>
          <View style={{ paddingVertical: 10, gap: 10 }}>
            <Text style={[styles.text, styles.title]}>Version</Text>
            <Text style={styles.text}>2.0.0</Text>
            <Text style={styles.text}>
              Developed by <Text style={{ color: '#3427c8' }}>MESEA</Text>
            </Text>
          </View>
        </ScrollView>
      </ReactNativeModal>
    </View>
  )
}

const styles = StyleSheet.create({
  listSettings: {
    // flex: 5,
  },
  text: {
    color: '#000',
  },
  title: {
    fontWeight: 'bold',
  },
  listSettingBelow: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
})
