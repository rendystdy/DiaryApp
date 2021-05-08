import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({ width, height }) => (
  <View style={styles.container(width, height)} />
)

export default Gap

const styles = StyleSheet.create({
  container: (width = 0, height = 0) => ({
    width: width,
    height: height,
  }),
})
