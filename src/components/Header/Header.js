import React from 'react'
import { View, Text } from 'react-native'
import styles from './Header.styles'

const Header = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {props.title}</Text>
      <Text style={styles.count}> {props.counter} </Text>
    </View>
  )
}

export default Header