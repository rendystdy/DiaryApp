import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

const HeaderProfile = ({ name, urlImage, onPressImage }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Hello ...</Text>
          <Text style={styles.name}>Batries</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPressImage}>
          <View style={styles.wrapperImage}>
            <Image
              source={urlImage}
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default HeaderProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontWeight: '600', letterSpacing: 2, fontSize: 16 },
  name: { fontWeight: 'bold', fontSize: 20, letterSpacing: 1 },
  wrapperImage: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 2,
    shadowOpacity: 1,
  },
})
