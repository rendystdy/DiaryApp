import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useTheme } from '../Theme'

const Button = ({ height, width, bgColor, text, onPress }) => {
  const { Layout, Colors } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { height, width, backgroundColor: bgColor ? bgColor : Colors.primary },
        styles.container,
      ]}
    >
      <Text style={{ color: 'white', fontSize: 11, textAlign: 'center' }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { padding: 10, borderRadius: 4 },
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
