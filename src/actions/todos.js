import * as types from '../constans/actionTypes';

import { toggleTodo } from './todo';

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
    .catch(error => console.log(error))
  }
}

export const markAll = () => {
  return (dispatch, getState) => {
    const items = getState().todos.items;
    let count = 0;
    
    items.map((item) => {
      dispatch(toggleTodo(item.id, item.text, false))
        .then(() => {
          if (count === items.length - 1) {
            console.log('completed promises');
          } else {
            count++;
          }
        })
    });
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