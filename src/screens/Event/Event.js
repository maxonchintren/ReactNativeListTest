import React from 'react'
import { Text, SafeAreaView, View, Image, ScrollView } from 'react-native'
import ListHeader from '../../components/ListHeader/ListHeader'
import styles from './styles'

const Event = ({ route : { params : { event } }}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <ListHeader
          title={'Event'}
        />
        <View style={styles.eventHeader}>
          <View style={styles.eventAvatar}>
            <Image
              source={{ uri: event.actor.avatarUrl }}
              style={styles.eventAvatarImg}
            />
          </View>
          <Text style={styles.eventTitle}>{event.actor.displayLogin}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.eventSubTitle}>ID:</Text>
          <Text style={styles.eventText}>{event.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.eventSubTitle}>Type:</Text>
          <Text style={styles.eventText}>{event.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.eventSubTitle}>Repo:</Text>
          <Text style={styles.eventText}>{event.repo.name}</Text>
        </View>
        {
          event.org && (
            <View style={{ marginTop: 20 }}>
              <Text style={styles.eventTitle}>Organization:</Text>
              <View style={styles.row}>
                <Image
                  source={{ uri: event.org.avatarUrl }}
                  style={styles.eventOrgImg}
                />
                <Text style={styles.eventOrgTitle}>{event.org.login}</Text>
              </View>
            </View>
          )
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Event
