import React from 'react'
import { Text, View } from 'react-native'
import styles from './MainScreenStyle'
import { Helpers, Fonts } from 'App/Theme'

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center]}>
          <Text style={[Fonts.h1]} >Main Screen</Text>
        </View>
      </View>
    )
  }
}
