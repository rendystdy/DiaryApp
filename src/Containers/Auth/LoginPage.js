import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useTheme } from '../../Theme'
import { InputText, Gap, Button, SignUp } from '../../Components'
import { navigateAndSimpleReset } from '../../Navigators/Root'

const LoginPage = () => {
  const { Layout, Images, Fonts, Colors } = useTheme()
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
          onChange={() => {}}
          placeholder="yourname@gmail.com"
          keyboardType="email-address"
        />
        <Gap height={14} />
        <InputText
          title="Password"
          secureTextEntry
          onChange={() => {}}
          placeholder="your password"
          keyboardType="default"
        />
        <Gap height={65} />
        <Button
          bgColor={Colors.primary}
          text="Login"
          onPress={() => {
            navigateAndSimpleReset('HomePage')
          }}
        />
        <Gap height={39} />
        <SignUp />
      </ScrollView>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
})
