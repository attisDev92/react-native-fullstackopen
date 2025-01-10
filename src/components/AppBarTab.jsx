import React from 'react'
import { Pressable } from 'react-native'
import Text from './Text'

const AppBarTab = ({ textTab }) => {
  return (
    <Pressable>
      <Text fontSize={'subheading'} fontWeight={'bold'} style={{ color: '#fff' }}>
        {textTab}
      </Text>
    </Pressable>
  )
}

export default AppBarTab
