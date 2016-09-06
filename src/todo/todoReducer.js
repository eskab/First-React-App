const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }
    case 'TOGGLE_EDIT_TODO':
      if (state.id === action.id) {
        return {
          ...state,
          editMode: action.editMode
        }
      }      
    case 'EDIT_TODO':
      if (state.id === action.id) {
        return {
          ...state,
          editMode: action.editMode,
          text: action.text
        }
      }
    default:
      return state;
  }
};

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          todo(undefined, action)
        ]
      });
    case 'DELETE_TODO': 
      const todoId = action.id;
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== todoId)
      });
    case 'TOGGLE_TODO':
    case 'TOGGLE_EDIT_TODO':
    case 'EDIT_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(t => todo(t, action))
      });
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        filter: action.filter
      });
    default: 
      return state;
  }
}

export default todos;