import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '../Icons/Icons'

export default function SettingItem({ icon, label, value, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 55,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              backgroundColor: '#ebf5fe',
              width: 40,
              height: 40,
            }}
          >
            <Icon name={icon} />
          </View>
          <Text style={{ color: '#000' }}>{label}</Text>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#868D9A' }}>{value || ''}</Text>
          <Icon name='arrowRight' />
        </View>
      </View>
    </TouchableOpacity>
  )
}
