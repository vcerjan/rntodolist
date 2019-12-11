import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import { purple } from '../styles/colors'
import { Todo } from './Todo'
import { TodoCheckState } from '../redux/actions/todoListActions'

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 12,
    backgroundColor: purple,
  },
})

export const TodoList = ({ todos, checkTodo, uncheckTodo }) => (
  <View style={styles.body}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onPress={todo.state === TodoCheckState.CHECKED
          ? uncheckTodo
          : checkTodo
        }
      />
    )}
  </View>
)

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string,
      content: PropTypes.string,
      state: PropTypes.string,
    }),
  ),
  checkTodo: PropTypes.func,
  uncheckTodo: PropTypes.func,
}
