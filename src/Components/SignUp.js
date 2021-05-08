import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useTheme } from '../Theme'
import { Gap } from './'

const SignUp = ({ onPress }) => {
  const { Colors } = useTheme()
  return (
    <View>
      <Text
        style={{ color: Colors.grayishBlue, fontSize: 10, letterSpacing: 1 }}
      >
        Don't have an account yet?
      </Text>
      <Gap height={5} />
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={[styles.textSignUp, { color: Colors.darkModerateBlue }]}>
          Sign Up
        </Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  textSignUp: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
})
