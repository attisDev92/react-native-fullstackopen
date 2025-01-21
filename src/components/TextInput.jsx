import React from 'react'

import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const TextInput = ({ style, error, ...props }) => {
  const textInputStyles = [style]

  return <NativeTextInput style={[textInputStyles, styles.input]} {...props} />
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 2,
    paddingBlock: 10,
    paddingInline: '10%',
  },
})

export default TextInput
