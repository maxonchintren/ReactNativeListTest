import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { eventsSelector, isAllLoadedSelector, isLoadingEventsSelector, pagingSelector } from '../../store/selectors/events'
import ListHeader from '../../components/ListHeader/ListHeader'
import styles from './styles'
import palette from '../../theme/palette'
import EventItem from '../../components/EventItem/EventItem'
import { getEvents } from '../../store/modules/events/actions'

const List = ({ navigation }) => {
  const dispatch = useDispatch()

  const [isRefreshing, setIsRefreshing] = useState(false)
  const [secs, setSecs] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(true)

  const events = useSelector(eventsSelector)
  const isLoadingEvents = useSelector(isLoadingEventsSelector)
  const paging = useSelector(pagingSelector)
  const isAllLoaded = useSelector(isAllLoadedSelector)

  const flatListRef = useRef()

  useEffect(() => {
    fetchEvents()
    const unsubscribeFocus = navigation.addListener('focus', () => {
      flatListRef.current.scrollToOffset({ offset: 0 })
      fetchEvents(true, true)
      setIsTimerActive(true)
    })
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setIsTimerActive(false)
    })

    return (unsubscribeFocus, unsubscribeBlur)
  }, [])

  useEffect(() => {
    if (!isTimerActive) return
    const timer = setInterval(() => {
      if (secs <= 0) {
        fetchEvents(true, true)
      } else {
        setSecs(s => s - 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [secs, isTimerActive])

  const fetchEvents = (refresh = false, isAuto = false) => {
    if (
        isLoadingEvents ||
        (isAllLoaded && !refresh) ||
        ((refresh && !isAuto) && secs + 15 >= 60)
    ) return

    if (refresh) {
      setIsRefreshing(true)
    }

    dispatch(getEvents(
      {},
      () => {
        if (refresh) {
          setIsRefreshing(false)
          setSecs(60)
        }
      },
      (error) => {
        console.log(error)
        setIsRefreshing(false)
      },
      {
        page: refresh === true ? 1 : paging.page + 1,
        count: paging.count
      }
    ))
  }

  const goToEvent = (event) => {
    navigation.navigate('Event', { event })
  }

  const renderItem = useCallback(({ item }) => {
    return (
      <EventItem goToEvent={() => goToEvent(item)} {...item} />
    )
  }, [])

  const listHeaderComponent = (() => {
    return (
      // Здесь должно было быть общее количество сущетсвующих ивентов, но API не отдает amount :/
      <ListHeader count={secs} title="Events"/>
    )
  })

  const listFooterComponent = useCallback(() => {
    return (
      <View>
        {
          isLoadingEvents && <ActivityIndicator size={'large'} color={palette['text-sub']}/>
        }
      </View>
    )
  }, [isLoadingEvents])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => `event-${item.id}`}
        ref={flatListRef}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        showsVerticalScrollIndicator={false}
        onEndReached={() => fetchEvents()}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={() => fetchEvents(true)} />
        }
      />
    </SafeAreaView>
  )
}

export default List
