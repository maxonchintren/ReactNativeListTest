import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    container: {
      backgroundColor: palette['background-main'],
      flex: 1
    },
    contentContainer: {
      paddingHorizontal: 20,
      backgroundColor: palette['background-main']
    },
    eventHeader: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 15
    },
    eventAvatar: {
      width: 65,
      height: 65,
      borderRadius: 65,
      backgroundColor: palette['background-sub'],
      marginRight: 15
    },
    eventAvatarImg: {
      width: 65,
      height: 65,
      borderRadius: 65
    },
    eventTitle: {
      marginTop: 10,
      color: palette['text-main'],
      fontSize: 22,
      flexWrap: 'wrap',
      fontWeight: '500'
    },
    eventSubTitle: {
      fontSize: 18,
      color: palette['text-sub'],
      marginRight: 5
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '95%',
      marginVertical: 15
    },
    eventText: {
      flexWrap: 'wrap',
      color: palette['text-main'],
      fontSize: 18
    },
    eventOrgImg: {
      width: 55,
      height: 55,
      marginRight: 10
    },
    eventOrgTitle: {
      color: palette['text-main'],
      fontSize: 20,
      flexWrap: 'wrap',
      fontWeight: '500'
    }
  })

export default styles
