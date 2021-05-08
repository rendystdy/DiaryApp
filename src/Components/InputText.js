import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Gap } from './index'

const InputText = ({
  title,
  value,
  onChange,
  placeholder,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Gap height={6} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChange}
      />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E9EEF5',
  },
})
