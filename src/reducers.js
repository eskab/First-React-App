import * as types from './constans/actionTypes';

const todo = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO: 
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    case types.TOGGLE_EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        editMode: action.editMode
      };      
    case types.EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: action.completed,
        editMode: action.editMode,
        text: action.text
      };
    default:
      return state;
  }
}

const todos = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: {
          items: [
            ...state.todos.items,
            todo(undefined, action)
          ],
          pending: false
        }
      }    
    case types.DELETE_TODO:
      const todoId = action.id;
      return {
        ...state,
        todos: {
          items: state.todos.items.filter(todo => todo.id !== todoId),
          pending: false
        }
      }
    case types.TOGGLE_TODO:
    case types.TOGGLE_EDIT_TODO:
    case types.EDIT_TODO:
      return { 
        ...state, 
        todos: { 
          items: state.todos.items.map(t => todo(t, action)), 
          pending: false 
        } 
      }
    case types.SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case types.PENDING_REQUEST:
      return {
        ...state,
        todos: {
          pending: true,
          items: state.todos.items
        }
      }
    case types.RECEIVE_TODOS:
      return {
        ...state, 
        todos: {
          pending: false,
          items: action.todos
        }
      }
    default: 
      return state;
  }
}

export default todos;