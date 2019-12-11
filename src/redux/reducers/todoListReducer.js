import { TodoListActionTypes, TodoCheckState } from '../actions/todoListActions'

const mockData = [
  {id: '1', content: 'blah', state: TodoCheckState.CHECKED},
  {id: '2', content: 'blah', state: TodoCheckState.UNCHECKED},
  {id: '3', content: 'blah', state: TodoCheckState.UNCHECKED},
]

const initialState = {
  todoList: mockData,
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.INSERT_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ],
      }

    case TodoListActionTypes.CHECK_TODO: {
      const index = state.todoList.findIndex((val) => val.id === action.payload.id)
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, index),
          { ...state.todoList[index], state: TodoCheckState.CHECKED },
          ...state.todoList.slice(index + 1)
        ]
      }
    }

    case TodoListActionTypes.UNCHECK_TODO:
      const index = state.todoList.findIndex((val) => val.id === action.payload.id)
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, index),
          { ...state.todoList[index], state: TodoCheckState.UNCHECKED },
          ...state.todoList.slice(index + 1)
        ]
      }

    case TodoListActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(val => val.id !== action.payload.id)
      }

    default:
      return state
  }
}
