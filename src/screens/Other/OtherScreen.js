import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { NavigationService } from '../../services/NavigationService'
import { black, white } from '../../styles/colors'

class OtherScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => {
    return {
      title: 'Other screen',
      headerLeft: (
        <TouchableOpacity style={{ paddingHorizontal: 12 }} onPress={() => NavigationService.pop(1)}>
          <Icon name={'chevron-left'} size={24} color={white} />
        </TouchableOpacity>
      )
    }
  }

  render() {
    return <View style={styles.body}><Text style={styles.title}>Other screen content</Text></View>
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

export { OtherScreen }