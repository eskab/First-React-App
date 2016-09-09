import * as types from '../constans/actionTypes';

import { pendingRequest } from './todos';

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