import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/Form/InputForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import Icon from '../components/Icons/Icons'
import LoginAnimation from '../components/Animation/LoginAnimation'
import useDebounce from '../components/common/hooks/useDebounce'
import getUsernameExist from '../components/common/api/useCheckUsername'
import useRegisterUser from '../components/common/api/useRegisterUser'
import { ActivityIndicator } from 'react-native-paper'

interface SignUpProps {
  onLoginPress: () => void
}
interface FormData {
  username: string
  password: string
  cfPassword: string
}
const SignUp: React.FC<SignUpProps> = ({ onLoginPress }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean>(false)
  const debounceInputValue = useDebounce(inputValue, 300)
  const [showPasswordContainer, setShowPasswordContainer] = useState(false)

  useEffect(() => {
    const checkUsernameExistence = async () => {
      try {
        setIsLoading(true)
        const response = await getUsernameExist(debounceInputValue)
        const isAvailable = response?.result
        console.log('Username existence response:', response)
        setIsUsernameAvailable(isAvailable)
        // setShowPasswordContainer(!isAvailable)
      } catch (error: any) {
        console.error('Error checking username existence:', error.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (debounceInputValue) {
      checkUsernameExistence()
    }
  }, [debounceInputValue])

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const pwd = watch('password')

  const { mutate } = useRegisterUser()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)

    try {
      await mutate(data)
    } catch (error) {}
  }

  const handleBioLinkPress = () => {
    if (!isUsernameAvailable) {
      setShowPasswordContainer(true)
    } else {
      setShowPasswordContainer(false)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.gradientContainer}>
          <Icon focused={''} name='titleLogin' />
        </View>
        <View style={styles.formInput}>
          <View style={styles.inputContainer}>
            <Text style={styles.textDefault}>wisa.online/</Text>
            <InputForm
              label=''
              name='username'
              control={control}
              rules={{
                required: 'Không được trống',
                minLength: { value: 6, message: 'Tối thiểu 6 ký tự' },
                maxLength: { value: 20, message: 'Tối đa 20 ký tự' },
              }}
              placeholder='Tên tài khoản'
              errors={errors}
              isPassword={false}
              style={{ inputStyle: styles.inputDemo }}
              onChangeText={(text: string) => setInputValue(text)}
            />
            <View style={styles.inputRight}>
              {isLoading ? (
                <ActivityIndicator color='#3427c8' size={'small'} />
              ) : (
                <>
                  <View style={{ display: !isUsernameAvailable && inputValue ? 'flex' : 'none' }}>
                    <Icon focused={''} name='userChecked' />
                  </View>
                  <View
                    style={{
                      display: isUsernameAvailable ? 'flex' : 'none',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={styles.textExistedUser}>Đã tồn tại</Text>
                    <Icon focused={''} name='userExisted' />
                  </View>
                </>
              )}
            </View>
          </View>
          <View>
            {showPasswordContainer && (
              <>
                <InputForm
                  label='Mật khẩu'
                  name='password'
                  control={control}
                  rules={{
                    required: 'Không được trống',
                    minLength: { value: 6, message: 'Tối thiểu 6 ký tự' },
                    maxLength: { value: 20, message: 'Tối đa 20 ký tự' },
                  }}
                  placeholder='Mật khẩu'
                  errors={errors}
                  isPassword={true}
                  onChangeText={(text: string) => setInputValue(text)}
                />
                <InputForm
                  label='Nhập lại mật khẩu'
                  name='cfPassword'
                  control={control}
                  rules={{
                    required: 'Không được trống',
                    minLength: { value: 6, message: 'Tối thiểu 6 ký tự' },
                    maxLength: { value: 20, message: 'Tối đa 20 ký tự' },
                    validate: (value: any) => value === pwd || 'Mật khẩu không trùng khớp',
                  }}
                  placeholder='Mật khẩu'
                  errors={errors}
                  isPassword={true}
                  onChangeText={(text: string) => setInputValue(text)}
                />
              </>
            )}
          </View>

          <TouchableOpacity
            disabled={isUsernameAvailable ? true : false}
            onPress={() => {
              handleSubmit(onSubmit)()
              handleBioLinkPress()
            }}
            style={!isUsernameAvailable ? styles.signUpButton : styles.signUpButtonUserExisted}
          >
            <Text
              style={
                isUsernameAvailable === false
                  ? styles.signUpButtonText
                  : styles.signUpButtonTextUserExisted
              }
            >
              Tạo Bio Link
            </Text>
          </TouchableOpacity>
          <Text style={[styles.gradientSubText, { textAlign: 'center', marginTop: 10 }]}>
            Đã có tài khoản?{' '}
            <Text style={styles.textSignUp} onPress={onLoginPress}>
              Đăng nhập
            </Text>
          </Text>
          <View style={{ flex: 1, alignItems: 'center', marginBottom: 40 }}>
            <LoginAnimation />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: { paddingHorizontal: 40 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    paddingBottom: 4,
  },
  inputRight: { paddingRight: 10, position: 'absolute', right: 0, top: 39 },
  gradientSubText: {
    fontSize: 15,
    color: '#000',
    marginTop: 15,
  },
  gradientContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  textDefault: {
    position: 'absolute',
    top: 39,
    left: 20,
    color: '#3427c8',
    flex: 0,
    fontSize: 16,
  },

  textSignUp: {
    fontWeight: 'bold',
    color: '#3427c8',
    fontSize: 16,
  },
  formInput: {
    // marginVertical: 20,
    flex: 1,
    overflow: 'hidden',
  },
  signUpButton: {
    backgroundColor: '#3427c8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },
  signUpButtonUserExisted: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButtonTextUserExisted: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputDemo: {
    paddingHorizontal: 106,
    flex: 1,
  },
  textExistedUser: { color: '#f76707', fontSize: 12 },
})
export default SignUp
