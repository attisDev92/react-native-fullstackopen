import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../styles/theme'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.textSecondary,
  },
})

export default Main
