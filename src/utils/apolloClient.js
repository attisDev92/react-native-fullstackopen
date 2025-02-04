import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Constants from 'expo-constants'

const createApolloClient = (authStorage) => {
  // Creación del enlace HTTP básico
  const httpLink = createHttpLink({
    uri: Constants.manifest2.extra.expoClient.extra.base_uri,
  })

  // Obtén el token desde el almacenamiento
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      }
    } catch (error) {
      console.error(error)
      return { headers }
    }
  })

  // Crear ApolloClient con el enlace combinado (autenticación + HTTP)
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
