import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    container: {
      backgroundColor: palette['background-main'],
      flex: 1
    },
    listContainer: {
      paddingHorizontal: 20
    },
    text: {
      color: palette['text-main'],
      textAlign: 'center'
    }
  })

export default styles
