export const TodoListActionTypes = {
  INSERT_TODO: 'INSERT_TODO',
  CHECK_TODO: 'CHECK_TODO',
  UNCHECK_TODO: 'UNCHECK_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
}

export const TodoCheckState = {
  CHECKED: 'CHECKED',
  UNCHECKED: 'UNCHECKED',
}

export const insertTodo = (id, content) =>
  ({ 
    type: TodoListActionTypes.INSERT_TODO,
    payload: {
      id,
      content,
      state: TodoCheckedState.UNCHECKED,
    },
  })

export const checkTodo = (id) =>
  ({
    type: TodoListActionTypes.CHECK_TODO,
    payload: { id },
  })

export const uncheckTodo = (id) =>
  ({
    type: TodoListActionTypes.UNCHECK_TODO,
    payload: { id },
  })

export const removeTodo = (id) =>
  ({
    type: TodoListActionTypes.REMOVE_TODO,
    payload: { id },
  })


