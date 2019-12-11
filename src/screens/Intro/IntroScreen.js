import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import { black } from '../../styles/colors'
import { NavigationService } from '../../services/NavigationService'

class IntroScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => {
    return {
      title: 'Intro screen',
      headerStyle: {
        ...navigationOptions.headerStyle,
      },
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
          <Text style={styles.title}>Intro screen - tap to navigate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: black,
  },
})

export { IntroScreen }