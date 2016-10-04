import * as types from '../constans/actionTypes';

import { pendingRequest, requestDone } from './todos';

export const updateItem = (id, text, completed, cb) => {
  return dispatch => {
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
    .then(json => cb(json))
    .catch(error => console.log(error))    
  }
}

export const newItem = (id, text, cb) => {
  return dispatch => {
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
    .then(json => cb(json))
    .catch(error => console.log(error))
  }  
}

export const deleteItem = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(json => dispatch(Object.assign({}, json, { type: types.DELETE_TODO, id: id })))
    .catch(error => console.log(error))
  }  
}

export const toggleTodo = (id, text, completed) => {
  return dispatch => {
    dispatch(pendingRequest())
    return dispatch(updateItem(id, text, completed, (json) => dispatch({...json, type: types.TOGGLE_TODO})))
            .then(() => dispatch(requestDone()))
  }
}

export const toggleEditTodo = (id, editMode) => {
  return {
    type: types.TOGGLE_EDIT_TODO,
    id: id,
    editMode: (editMode !== undefined) ? !editMode : true
  }
}

export const applyChanges = (id, text, completed) => {
  return dispatch => {
    dispatch(pendingRequest())
    dispatch(updateItem(id, text, completed, (json) => dispatch({...json, type: types.EDIT_TODO, editMode: false})))
      .then(() => dispatch(requestDone()))
  }
}