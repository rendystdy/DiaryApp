import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import moment from 'moment'

const { width } = Dimensions.get('screen')

const backgroundColor = [
  '#FFCC80',
  '#FFAB91',
  '#E6EE9B',
  '#80DEEA',
  '#CF93D9',
  '#F490B1',
]

const Note = ({ data, onPress }) => {
  const myRandomColor =
    backgroundColor[Math.floor(Math.random() * backgroundColor.length)]

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container(myRandomColor)}
    >
      <Text>{data.title}</Text>
      <Text style={styles.dateTime}>
        {moment(data.date).format('MMM d, YYYY')}
      </Text>
    </TouchableOpacity>
  )
}

export default Note

const styles = StyleSheet.create({
  container: backColor => ({
    width: width / 2 - 20,
    backgroundColor: backColor,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 6,
    padding: 10,
  }),
  dateTime: { fontSize: 10, color: 'rgba(0, 0, 0, 0.5)' },
})
