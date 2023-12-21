import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ReactNativeModal } from 'react-native-modal'
import Icon from '../Icons/Icons'
import SettingItem from './SettingItem'
interface ModalProps {
  onClose: () => void
  isVisible?: boolean | (() => boolean | undefined) | undefined
}
const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const isModalVisible = isVisible && typeof isVisible === 'function' ? isVisible() : isVisible

  return (
    <View style={{ flex: 1 }}>
      <ReactNativeModal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={200}
        style={styles.modalStyle}
      >
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.header}>
            <View />
            <Text style={styles.headerText}>Cài đặt chung</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon focused={''} name='close' />
            </TouchableOpacity>
          </View>
          <View style={styles.listSettings}>
            <SettingItem icon='language' label='Ngôn ngữ' value='Tiếng Việt' onPress={() => {}} />
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
          <View style={styles.versionInfo}>
            <Text style={[styles.text, styles.title]}>Version</Text>
            <Text style={styles.text}>2.0.0</Text>
            <Text style={styles.text}>
              Developed by <Text style={styles.developerText}>MESEA</Text>
            </Text>
          </View>
        </ScrollView>
      </ReactNativeModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalStyle: {
    paddingBottom: 0,
  },
  scrollViewStyle: {
    height: '80%',
    position: 'absolute',
    width: '100%',
    bottom: -20,
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '900',
  },
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
  versionInfo: {
    paddingVertical: 10,
    gap: 10,
  },
  developerText: {
    color: '#3427c8',
  },
})
export default Modal
