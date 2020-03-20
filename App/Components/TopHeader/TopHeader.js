import React from 'react'
import { View, Text } from 'react-native'
import TopHeaderStyle from './TopHeaderStyle'
import { Metrics, Colors, Fonts } from 'App/Theme'

export default () => {
    return(
    <View style={[TopHeaderStyle.container, Metrics.mediumTopPedding, Metrics.tinyBottomPedding, Metrics.horizontalPadding, { borderBottomColor: Colors.text, borderBottomWidth: 1, }]} >
      <Text style={[TopHeaderStyle.logo ,Fonts.h3]} >Logo</Text>
      <Text style={[TopHeaderStyle.add]} >+</Text>
      <Text style={[TopHeaderStyle.search]}>S</Text>
      <Text style={[TopHeaderStyle.option]}>:</Text>
    </View>
    )
}