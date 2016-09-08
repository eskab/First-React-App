export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_EDIT_TODO = 'TOGGLE_EDIT_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS'; 

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}

export const toggleEditTodo = (id, editMode) => {
  return {
    type: TOGGLE_EDIT_TODO,
    id: id,
    editMode: (editMode !== undefined) ? !editMode : true
  }
}

export const applyChanges = (id, isChanged, completed, text) => {
  return {
    type: EDIT_TODO,
    id: id,
    completed: (isChanged) ? false : completed,
    editMode: false,
    text: text
  }
}

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    id: id,
    completed: false,
    text: text
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export const requestTodos = () => {
  return {
    type: REQUEST_TODOS
  }
}

export const receiveTodos = (json) => {
  return {
    type: RECEIVE_TODOS,
    todos: json
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos())
    return fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  }
}