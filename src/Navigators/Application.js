import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer, LoginPage, HomePage } from '../Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '../Theme'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  // const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  // const applicationIsLoading = useSelector(state => state.startup.loading)

  // useEffect(() => {
  //   if (MainNavigator == null && !applicationIsLoading) {
  //     MainNavigator = require('@/Navigators/Main').default
  //     setIsApplicationLoaded(true)
  //   }
  // }, [applicationIsLoading])

  // // on destroy needed to be able to reset when app close in background (Android)
  // useEffect(
  //   () => () => {
  //     setIsApplicationLoaded(false)
  //     MainNavigator = null
  //   },
  //   [],
  // )

  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen
            name="Startup"
            component={IndexStartupContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          {/* {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
