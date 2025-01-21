import React, { useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import { Link, useLocation } from 'react-router-native'
import theme from '../styles/theme'
import { useState } from 'react'

const AppBarTab = ({ textTab, route }) => {
  const [pressableStyle, setPressableStyle] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === route) {
      setPressableStyle(styles.active)
    } else {
      setPressableStyle('')
    }
  }, [pathname, route])

  return (
    <Pressable style={[pressableStyle, styles.appBarContainer]}>
      <Link to={route}>
        <Text fontSize={'subheading'} fontWeight={'bold'} style={{ color: '#fff' }}>
          {textTab}
        </Text>
      </Link>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  active: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 5,
  },
  appBarContainer: {
    marginInline: 5,
  },
})

export default AppBarTab
