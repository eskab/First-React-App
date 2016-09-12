import { connect } from 'react-redux';

import { toggleTodo, toggleEditTodo, applyChanges } from '../actions/todo';
import { deleteTodo } from '../actions/todos'
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
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos.items, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    del: (id) => dispatch(deleteTodo(id)),
    toggle: (id, text, completed) => dispatch(toggleTodo(id, text, completed)),
    edit: (id, editMode) => dispatch(toggleEditTodo(id, editMode)), 
    applyChanges: (id, text, completed) => dispatch(applyChanges(id, text, completed))  
  }
}

const NewTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default NewTodoList;