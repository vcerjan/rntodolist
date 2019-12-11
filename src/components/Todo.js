import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'

import { gray, green, purple } from '../styles/colors'
import { TodoCheckState } from '../redux/actions/todoListActions'

const styles = StyleSheet.create({
  taskBody: {
    backgroundColor: purple,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'normal',
    paddingRight: 12,
  }
})

export const Todo = ({ onPress, id, content, state }) => (
  <View>
    <TouchableOpacity style={styles.taskBody} onPress={() => onPress(id)}>
      <Text style={styles.taskText}>{content}</Text>
      <Icon
        name={ state === TodoCheckState.CHECKED ? 'check-square' : 'square' }
        size={20}
        color={ state === TodoCheckState.CHECKED ? green : gray }
      />
    </TouchableOpacity>
  </View>
)

Todo.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.string,
  onPress: PropTypes.func,
}
