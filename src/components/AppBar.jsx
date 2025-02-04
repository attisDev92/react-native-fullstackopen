import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'
import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries' // La consulta 'me' para verificar si el usuario está autenticado
import { useNavigate } from 'react-router-native'
import AuthStorage from '../utils/authStorage'
import { useApolloClient } from '@apollo/client'
import Text from './Text'
import { StatusBar } from 'expo-status-bar'

const AppBar = () => {
  const [user, setUser] = useState(null)
  const { data, loading, error, refetch } = useQuery(ME) // Ejecutamos la consulta 'me' para verificar si el usuario está autenticado
  const navigate = useNavigate() // Usamos useNavigate para redirigir
  const apolloClient = useApolloClient()
  const authStorage = new AuthStorage()

  useEffect(() => {
    if (data && data.me) setUser(data.me)
    else setUser(null)
  }, [data])
  console.log(data)
  // Función para manejar el cierre de sesión
  const handleSignOut = async () => {
    try {
      // Eliminamos el token de acceso del almacenamiento
      await authStorage.removeAccessToken()

      // Restablecemos la tienda del cliente Apollo
      await apolloClient.resetStore()
      setUser(null) // Esto asegura que se actualice el estado

      // Redirigimos al usuario a la pantalla de inicio de sesión
      navigate('/singin')

      // Forzar un refetch de la consulta 'me' para que se actualice
      await refetch()
    } catch (e) {
      console.error('Error al cerrar sesión', e)
    }
  }

  if (loading)
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    ) // Mientras esperamos la respuesta de la consulta

  if (error)
    return (
      <View style={styles.error}>
        <Text>Error al obtener los datos del usuario.</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView horizontal>
        <AppBarTab textTab={'Repositories'} route={'/'} />

        {/* Si el usuario está autenticado, mostramos "Sign Out", si no, mostramos "Sign In" */}
        <AppBarTab
          textTab={user ? 'Sign Out' : 'Sign In'}
          route={user ? '#' : '/singin'} // Si el usuario está autenticado, no redirige, solo ejecuta el cierre de sesión
          onPress={user ? handleSignOut : null} // Si el usuario está autenticado, manejamos el cierre de sesión al hacer clic
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: 20,
    backgroundColor: theme.backgroundColor,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
})

export default AppBar
