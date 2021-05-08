import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useTheme } from '../Theme/'
import { SvgXml } from 'react-native-svg'

const HeaderWithIcon = () => {
  const { Images, Colors } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <View style={styles.wrapperIconSearch}>
        <Image
          source={Images.iconSearch}
          style={styles.iconSearchStyle}
          resizeMode="cover"
        />
      </View>
    </View>
  )
}

export default HeaderWithIcon

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 20, fontWeight: '600', letterSpacing: 1 },
  wrapperIconSearch: {
    backgroundColor: '#fff',
    borderColor: '#3B3B3B',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    borderRadius: 4,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    elevation: 2,
  },
  iconSearchStyle: {
    width: 14,
    height: 14,
  },
})
