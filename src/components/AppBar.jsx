import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  return (
    <ScrollView horizontal style={styles.container} dire>
      <AppBarTab textTab={'Repositories'} route={'/'} />
      <AppBarTab textTab={'SingIn'} route={'/singin'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.dark,
    padding: 30,
  },
})

export default AppBar
