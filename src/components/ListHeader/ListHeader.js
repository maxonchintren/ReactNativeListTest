import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const ListHeader = ({ title, count }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {
        count > -1 && (
          <Text style={styles.counter}>{count}</Text>
        )
      }
    </View>
  )
}

export default ListHeader
