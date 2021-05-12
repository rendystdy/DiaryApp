import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  View,
  Text,
  ActivityIndicatorBase,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../Theme'
import { Brand, Button } from '../../Components'
import { navigate } from '../../Navigators/Root'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'

const IndexStartupContainer = props => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const [isLogin, setIsLogin] = useState(true)

  const { t } = useTranslation()

  useEffect(() => {
    checkLoggin()
  }, [])

  const checkLoggin = async () => {
    try {
      const isLogin = await AsyncStorage.getItem('isLogin')
      if (isLogin === 'success') {
        setTimeout(() => {
          setIsLogin(false)
          navigate('HomePage')
        }, 2000)
      } else {
        setTimeout(() => {
          setIsLogin(false)
        }, 2000)
      }
    } catch (e) {}
  }

  if (isLogin) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size={22} color="red" />
      </View>
    )
  } else {
    return (
      <View style={[Layout.fill, { backgroundColor: Colors.pageBackground }]}>
        <View
          style={[
            Layout.fill,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Gutters.largeVPadding,
            Gutters.largeHPadding,
          ]}
        >
          <Brand />
          <View>
            <Text style={[Fonts.textCenter, Fonts.titleSmall]}>
              {t('welcome')}
            </Text>
            <Text style={[Fonts.textCenter, Fonts.textSmall]}>
              {t('description')}
            </Text>
          </View>
          <Button
            text="Getting Started"
            onPress={() => {
              navigate('LoginPage')
            }}
            width={225}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
})

export default connect(mapStateToProps, null)(IndexStartupContainer)
