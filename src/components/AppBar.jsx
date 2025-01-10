import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab textTab={'Repositories'} />
    </View>
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
