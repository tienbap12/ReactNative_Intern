import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import InputForm from '../components/Form/InputForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import Icon from '../components/Icons/Icons'
import LoginAnimation from '../components/Animation/LoginAnimation'
interface LoginProps {
  onSignUpPress: () => void
}
interface FormData {
  username: string
  password: string
}

const Login: React.FC<LoginProps> = ({ onSignUpPress }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
    >
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        <View style={styles.formContainer}>
          <View style={styles.gradientContainer}>
            <Icon focused={''} name='titleLogin' />
            <Text style={styles.gradientSubText}>Đăng nhập vào BIO</Text>
          </View>
          <View style={styles.formInput}>
            <InputForm
              label='Tên tài khoản'
              name='username'
              control={control}
              rules={{
                required: 'Không được trống',
                minLength: { value: 6, message: 'Tối thiểu 6 ký tự' },
                maxLength: { value: 50, message: 'Tối đa 50 ký tự' },
              }}
              placeholder='Nhập tên tài khoản của bạn'
              errors={errors}
              isPassword={false}
            />
            <InputForm
              label='Mật khẩu'
              name='password'
              control={control}
              rules={{
                required: 'Không được trống',
                minLength: { value: 6, message: 'Tối thiểu 6 ký tự' },
                maxLength: { value: 50, message: 'Tối đa 50 ký tự' },
              }}
              placeholder='Nhập mật khẩu của bạn'
              errors={errors}
              isPassword={true}
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.gradientSubText, { textAlign: 'center', marginTop: 0 }]}>OR</Text>
          <View style={styles.anotherLogin}>
            <View style={styles.socialLoginButtons}>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Image
                  source={require('../../Assets/img/unawa.png')}
                  style={styles.socialLoginIcon}
                  resizeMode='contain'
                />
                <Text style={styles.socialLoginButtonText}>Đăng nhập với Unawa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Image
                  source={require('../../Assets/img/walletconnect.png')}
                  style={styles.socialLoginIcon}
                  resizeMode='contain'
                />
                <Text style={styles.socialLoginButtonText}>Đăng nhập với WalletConnect</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Image
                  source={require('../../Assets/img/unipass.png')}
                  style={styles.socialLoginIcon}
                  resizeMode='contain'
                />
                <Text style={styles.socialLoginButtonText}>Đăng nhập với UniPass</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.gradientSubText, { textAlign: 'center', marginTop: 0 }]}>
            Chưa có tài khoản?{' '}
            <Text style={styles.textSignUp} onPress={onSignUpPress}>
              Đăng ký
            </Text>
          </Text>
          <View style={{ flex: 1, alignItems: 'center', marginBottom: 40 }}>
            <LoginAnimation />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  formContainer: { paddingHorizontal: 40 },
  gradientContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  gradientText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  gradientSubText: {
    fontSize: 15,
    color: '#000',
    marginTop: 15,
  },
  textSignUp: {
    fontWeight: 'bold',
    color: '#3427c8',
    fontSize: 16,
  },
  formInput: {
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#3427c8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  anotherLogin: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  anotherLoginText: {
    fontSize: 16,
  },
  socialLoginButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  socialLoginButton: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    color: '#000',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  socialLoginButtonText: {
    marginTop: 5,
    color: '#000',
    fontWeight: '600',
  },
  socialLoginIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
})
export default Login
