import { combineReducers } from 'redux'

import { todoListReducer } from './todoListReducer'

export const RootReducer = combineReducers({
  todoList: todoListReducer,
})
