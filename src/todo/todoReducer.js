const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        todos: [
          ...state.todos,
          todo(undefined, action)
        ]
      };
    case 'DELETE_TODO': 
      const todoId = action.id;
      return {
        todos: state.todos.filter(todo => todo.id !== todoId)
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(t => todo(t, action))
      };
    default: 
      return state;
  }
}

export default todos;