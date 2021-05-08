import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../Theme'
import InitStartup from '../../Store/Startup/Init'
import { Brand, Button } from '../../Components'
import { navigate } from '../../Navigators/Root'

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()

  const { t } = useTranslation()

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(InitStartup.action())
  // }, [dispatch])

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

export default IndexStartupContainer
