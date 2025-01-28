import { ApolloClient, InMemoryCache } from '@apollo/client'
import Constants from 'expo-constants'

const client = new ApolloClient({
  uri: Constants.manifest2.extra.expoClient.extra.base_uri,
  cache: new InMemoryCache(),
})

export default client
