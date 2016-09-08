import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    case 'COMPLETED':
      return todos.filter(t => t.completed)      
    default: 
      return todos;
  }  
};

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos, state.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    cbDelete: (id) => {
      dispatch({
        type: 'DELETE_TODO', 
        id: id
      })
    },
    cbToggle: (id) => {
      dispatch({ 
        type: 'TOGGLE_TODO', 
        id: id 
      });
    },
    cbEdit: (id, editMode) => {
      dispatch({
        type: 'TOGGLE_EDIT_TODO', 
        id: id, 
        editMode: (editMode !== undefined) ? !editMode : true 
      });
    }, 
    cbApplyChanges: (id, isChanged, completed, text) => {
      dispatch({ 
        type: 'EDIT_TODO',
        id: id,
        completed: (isChanged) ? false : completed,
        editMode: false,
        text: text
      });
    },     
  }
};

const NewTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default NewTodoList;