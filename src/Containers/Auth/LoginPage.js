import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useTheme } from '../../Theme'
import { InputText, Gap, Button, SignUp } from '../../Components'
import { navigateAndSimpleReset } from '../../Navigators/Root'
import { loginRequest } from '../../Redux/Actions/LoginAction'
import auth from '@react-native-firebase/auth'
import { showMessage, hideMessage } from 'react-native-flash-message'

const LoginPage = props => {
  const { Layout, Images, Fonts, Colors } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const { loading } = props

  const onChange = (type, value) => {
    if (type === 'email') {
      setEmail(value)
    } else if (type === 'password') {
      setPassword(value)
    } else {
      return
    }
  }

  useEffect(() => {
    handleValidation()
  }, [email, password])

  const handleValidation = () => {
    const forms = { email, password }

    let filled = true

    Object.keys(forms).map(form => {
      console.log(form)
      if (!forms[form]) {
        filled = false
      }
    })

    setDisabled(filled)

    return filled
  }

  const handleAuthLogin = async () => {
    if (handleValidation()) {
      const { loginRequest } = props
      await loginRequest(email, password)

      const { loading, error } = props
      if (!loading && !error) {
        navigateAndSimpleReset('HomePage')
      }
    }

    return
  }

  return (
    <View
      style={[
        Layout.fill,
        styles.container,
        { backgroundColor: Colors.pageBackground },
      ]}
    >
      <ScrollView style={Layout.fill} showsVerticalScrollIndicator={false}>
        <View style={Layout.alignItemsCenter}>
          <Image
            source={Images.logo}
            style={{ width: 180, height: 180 }}
            resizeMode="contain"
          />
          <Text style={[Fonts.titleSmall]}>Login</Text>
        </View>
        <Gap height={39} />
        <InputText
          title="E-mail"
          onChange={val => onChange('email', val)}
          placeholder="yourname@gmail.com"
          keyboardType="email-address"
        />
        <Gap height={14} />
        <InputText
          title="Password"
          secureTextEntry
          onChange={val => onChange('password', val)}
          placeholder="your password"
          keyboardType="default"
        />
        <Gap height={65} />
        <Button
          bgColor={Colors.primary}
          text="Login"
          loading={loading}
          onPress={handleAuthLogin}
          disabled={!disabled && loading}
        />
        <Gap height={39} />
        <SignUp />
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
})

const mapDispatchToProps = dispatch => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
})
