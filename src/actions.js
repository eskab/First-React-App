import * as types from './constans/actionTypes';

export const deleteTodo = (id) => {
  return dispatch => {
    dispatch(pendingRequest())
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(json => dispatch(Object.assign({}, json, { type: types.DELETE_TODO, id: id })))
  }
}

export const toggleTodo = (id, text, completed) => {
  return dispatch => {
    dispatch(pendingRequest())
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        text: text,
        completed: !completed
      })
    })
    .then(response => response.json())
    .then(json => dispatch(Object.assign({}, json, { type: types.TOGGLE_TODO })))
    .catch(error => console.log(error))
  }
}

export const toggleEditTodo = (id, editMode) => {
  return {
    type: types.TOGGLE_EDIT_TODO,
    id: id,
    editMode: (editMode !== undefined) ? !editMode : true
  }
}

export const applyChanges = (id, completed, text) => {
  return dispatch => {
    dispatch(pendingRequest())
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        text: text,
        completed: completed
      })
    })
    .then(response => response.json())
    .then(json => dispatch(Object.assign({}, json, { type: types.EDIT_TODO, editMode: false })))
    .catch(error => console.log(error))
  }
}

export const addTodo = (id, text) => {
  return dispatch => {
    dispatch(pendingRequest())
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        text: text,
        completed: false
      })
    })
    .then(response => response.json())
    .then(json => dispatch(Object.assign({}, json, { type: types.ADD_TODO })))
    .catch(error => console.log(error))
  }  
}

export const setFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export const pendingRequest = () => {
  return {
    type: types.PENDING_REQUEST
  }
}

export const receiveTodos = (json) => {
  return {
    type: types.RECEIVE_TODOS,
    todos: json
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(pendingRequest())
    return fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  }
}