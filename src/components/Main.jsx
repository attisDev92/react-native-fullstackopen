import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../styles/theme'
import SignIn from './SigIn'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/singin" exact element={<SignIn />} />
        <Route path="*" />
      </Routes>
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
