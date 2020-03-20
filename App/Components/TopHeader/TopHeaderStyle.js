import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between"
  },
  logo: {
      flex: 14
  },
  add: {
      flex: 1
  },
  search: {
      flex: 1
  },
  option: {
      flex: 1
  },
})
