const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
        ]
      };
    default: 
      return state;
  }
}

export default todo;