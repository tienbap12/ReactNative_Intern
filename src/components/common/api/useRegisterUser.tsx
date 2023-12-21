import { useMutation, UseMutationResult } from 'react-query'
import axios from 'axios'
import { BASEURL } from './BaseUrl'

interface RegistrationForm {
  username: string
  password: string
}

const registerUser = async ({ username, password }: RegistrationForm) => {
  try {
    const response = await axios.post(`${BASEURL}/users/register`, {
      username,
      password,
    })

    return response.data
  } catch (error) {
    throw new Error('Failed to register user')
  }
}

const useRegisterUser = (): UseMutationResult<any, unknown, RegistrationForm, unknown> => {
  return useMutation('registerUser', registerUser, {
    onSuccess: (data) => {
      console.log('tạo tài khoản thành công', data)
    },
  })
}

export default useRegisterUser
