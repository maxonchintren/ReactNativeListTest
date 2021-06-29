import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    title: {
      color: palette['text-main'],
      fontSize: 35,
      fontWeight: '500'
    },
    counter: {
      color: palette['text-sub'],
      fontSize: 35,
      fontWeight: '500'
    }
  })

export default styles