import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
  const [mutation, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }
    try {
      const { data } = await mutation({ variables: { credentials } })
      return data
    } catch (e) {
      throw e
    }
  }

  return { signIn, result }
}

export default useSignIn
