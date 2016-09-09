import { connect } from 'react-redux';

import { addTodo } from '../actions/todos';
import TodoAddForm from '../components/TodoAddForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (id, text) => dispatch(addTodo(id, text))
  }
};

const NewTodoAddForm = connect(mapStateToProps, mapDispatchToProps)(TodoAddForm)

export default NewTodoAddForm;