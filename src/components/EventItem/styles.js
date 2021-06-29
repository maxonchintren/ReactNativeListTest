import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    eventItemCont: {
      width: '100%',
      borderWidth: 1,
      borderColor: palette['background-sub'],
      borderRadius: 8,
      padding: 10,
      marginVertical: 15
    },
    eventHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15
    },
    eventAvatar: {
      width: 35,
      height: 35,
      borderRadius: 35,
      backgroundColor: palette['background-sub']
    },
    eventAvatarImg: {
      width: 35,
      height: 35,
      borderRadius: 35
    },
    eventTitle: {
      marginTop: 10,
      color: palette['text-main'],
      fontSize: 15,
      flexWrap: 'wrap',
      fontWeight: '500'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  })

export default styles