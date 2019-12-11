import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { black } from '../../styles/colors'
import { NavigationService } from '../../services/NavigationService'
import { TodoList } from '../../components/TodoList'
import { TodoCheckState, checkTodo, uncheckTodo } from '../../redux/actions/todoListActions'

class HomeScreenContainer extends Component {
  static navigationOptions = ({ navigationOptions }) => {
    return {
      title: 'Home screen',
    }
  }

  render() {
    console.log(this.props)
    return (
      <ScrollView style={styles.body}>
        <TouchableOpacity onPress={() => NavigationService.navigate('Other')}>
          <Text style={styles.title}>Home screen - tap to navigate to "Other Screen"</Text>
        </TouchableOpacity>
        <TodoList
          checkTodo={this.props.checkTodo}
          todos={this.props.todos}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: black,
  },
})

const mapStateToProps = (state) => ({
  todos: state.todoList.todoList
})

const mapDispatchToProps = {
  checkTodo,
  uncheckTodo,
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)