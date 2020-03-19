import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers, Fonts } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
        <Text style={[Fonts.h1, styles.logo]} >LOGO</Text>
        </View>
      </View>
    )
  }
}
