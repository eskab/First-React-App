import { 
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_EDIT_TODO,
  EDIT_TODO,
  SET_VISIBILITY_FILTER,
  PENDING_REQUEST,
  RECEIVE_TODOS
} from './actions';

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    case TOGGLE_EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        editMode: action.editMode
      };      
    case EDIT_TODO:
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
};

const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return Object.assign({}, state, {
        todos: {
          pending: false,
          items: [
            ...state.todos.items,
            todo(undefined, action)
          ]
        }
      });
    case DELETE_TODO: 
      const todoId = action.id;
      return Object.assign({}, state, {
        todos: {
          items: state.todos.items.filter(todo => todo.id !== todoId)
        }
      });
    case TOGGLE_TODO:
    case TOGGLE_EDIT_TODO:
    case EDIT_TODO:
      return Object.assign({}, state, {
        todos: {
          items: state.todos.items.map(t => todo(t, action))
        }
      });
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    case PENDING_REQUEST:
      return Object.assign({}, state, {
        todos: {
          pending: true,
          items: state.todos.items
        }
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: {
          pending: false,
          items: action.todos
        }
      })      
    default: 
      return state;
  }
}

export default todos;