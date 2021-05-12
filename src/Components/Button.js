import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { useTheme } from '../Theme'

const Button = ({
  height,
  width,
  bgColor,
  text,
  onPress,
  disabled,
  loading,
}) => {
  const { Layout, Colors } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        { height, width, backgroundColor: bgColor ? bgColor : Colors.primary },
        styles.container,
        disabled && styles.disabled,
      ]}
    >
      <Text style={{ color: 'white', fontSize: 11, textAlign: 'center' }}>
        {text}
      </Text>
      {loading && (
        <ActivityIndicator size={14} color="red" style={{marginLeft: 8}} animating={loading} />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: { backgroundColor: 'gray' },
})

Button.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
}

Button.defaultProps = {
  height: 36,
}

export default Button
