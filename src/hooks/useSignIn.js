import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const credentials = { username, password } // Preparamos las credenciales

    try {
      const { data } = await mutate({
        variables: { credentials },
      })

      if (data && data.authenticate && data.authenticate.accessToken) {
        const token = data.authenticate.accessToken
        await authStorage.setAccessToken(token) // Almacenamos el token en AuthStorage
        await apolloClient.resetStore()
        return data // Devolvemos los datos de la mutación
      } else {
        throw new Error('No se recibió el token de acceso')
      }
    } catch (e) {
      console.log('Error al iniciar sesión: ', e)
      throw new Error('Error en la autenticación: ' + e.message)
    }
  }

  return { signIn, result }
}

export default useSignIn
