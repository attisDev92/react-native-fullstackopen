import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab textTab={'Repositories'} route={'/'} />
        <AppBarTab textTab={'SingIn'} route={'/singin'} />
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
})

export default AppBar
