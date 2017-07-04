import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Field, reduxForm } from 'redux-form/immutable'

import InputField from '../components/InputField'

const submit = values => {
  console.log('submitting form', values.toJS())
}

const Form = props => {
  const { handleSubmit } = props
  return (
    <View>
      <Text>
        name
      </Text>
      <Field name="name" component={ InputField } />
      <TouchableOpacity onPress={ handleSubmit(submit) }>
        <Text>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Form = reduxForm({
  form: 'user'
})(Form)

export default Form
