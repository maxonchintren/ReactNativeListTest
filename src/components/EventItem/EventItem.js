import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const EventItem = ({ type, actor, goToEvent }) => {

  return (
    <TouchableOpacity onPress={goToEvent} style={styles.eventItemCont}>
      <View style={styles.eventHeader}>
        <View style={styles.eventAvatar}>
          <Image
            source={{ uri: actor.avatarUrl }}
            style={styles.eventAvatarImg}
          />
        </View>
        <Text style={styles.eventTitle}>{actor.displayLogin}</Text>
      </View>
      <View style={styles.row}>
        <Text>{type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default EventItem
