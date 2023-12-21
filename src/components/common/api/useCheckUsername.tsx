import axios from 'axios'
import { BASEURL } from './BaseUrl'
import { useQuery } from 'react-query'

const checkUsernameExist = async (username: string) => {
  try {
    const response = await axios.get(`${BASEURL}/users/usernames/${username}/exist`)
    return response.data
  } catch (error) {
    throw new Error(`Failed to check username existence: `)
  }
}

export const useCheckUsernameExist = () => {
  const { isLoading, isError, data, refetch } = useQuery(['usernameCheck', checkUsernameExist])

  return { isLoading, isError, data, refetch }
}

export default checkUsernameExist
