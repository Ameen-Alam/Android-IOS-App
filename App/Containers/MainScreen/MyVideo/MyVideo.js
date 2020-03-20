import React from 'react'
import { Text, View } from 'react-native'
import styles from './MyVideoStyle'
import { Helpers, Fonts } from 'App/Theme'
import TopHeader from 'App/Components/TopHeader/TopHeader'


export default class MyVideo extends React.Component {
  render() {
    return (
      <>
      <TopHeader />
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center]}>
          <Text style={[Fonts.h1]} >MyVideo</Text>
        </View>
      </View>
      </>
    )
  }
}
