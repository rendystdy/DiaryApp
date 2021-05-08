import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import moment from 'moment'

const { width } = Dimensions.get('screen')

const Note = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <Text style={styles.dateTime}>
        {moment(new Date()).format('MMM d, YYYY')}
      </Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    backgroundColor: '#FFAB91',
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 6,
    padding: 10,
  },
  dateTime: { fontSize: 10, color: 'rgba(0, 0, 0, 0.5)' },
})
