import React from 'react'
import { TextInput, View } from 'react-native'

const InputField = props => {
  const { input, meta, ...restProps } = props
  const { onChange, ...restInput } = input
  return (
    <View>
      <TextInput
        { ...restProps }
        { ...restInput }
        onChangeText={ onChange }
      />
    </View>
  )
}

export default InputField
