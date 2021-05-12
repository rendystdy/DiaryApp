import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from 'react-native'
import { useTheme } from '../Theme/'

const HeaderWithBack = ({ onPressBack, onPressSave, type, loading }) => {
  const { Images } = useTheme()
  console.log({ loadingHeader: loading })
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressBack}>
        <View style={styles.wrapper}>
          <Image
            source={Images.iconArrowLeft}
            style={{ width: 16, height: 16 }}
            resizeMode="cover"
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onPressSave}>
        {type === 'update' ? (
          <View style={styles.wrapper}>
            <Image
              source={Images.iconEdit}
              style={{ width: 16, height: 16 }}
              resizeMode="cover"
            />
          </View>
        ) : (
          <View style={styles.wrapper}>
            <Text style={{ fontSize: 12, color: 'white' }}>Save</Text>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  )
}

export default HeaderWithBack

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  wrapper: {
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
