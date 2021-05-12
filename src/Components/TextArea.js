import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Textarea from 'react-native-textarea'

const TextArea = ({ type, onChange, defaultValue, maxLength, placeholder }) => {
  const [height, setHeight] = React.useState(50)
  return (
    <View style={styles.container}>
      <Textarea
        containerStyle={styles.textareaContainer(height)}
        style={styles.textarea(height)}
        onChangeText={onChange}
        defaultValue={defaultValue}
        maxLength={maxLength}
        onContentSizeChange={e => {
          const dynamicHeight = e.nativeEvent.contentSize.height
          if (type === 'title' && dynamicHeight > 180) {
            return
          }
          setHeight(e.nativeEvent.contentSize.height)
        }}
        placeholder={placeholder}
        placeholderTextColor={'#c7c7c7'}
        underlineColorAndroid={'transparent'}
      />
    </View>
  )
}

export default TextArea

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textareaContainer: height => ({
    height: height + 5,
    maxHeight: 180,
  }),
  textarea: height => ({
    textAlignVertical: 'top', // hack android
    minHeight: height,
    height: height,
    maxHeight: 180,
    fontSize: 20,
    color: 'black',
  }),
})
