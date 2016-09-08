import { connect } from 'react-redux';

import TodoAddForm from '../components/TodoAddForm';

const mapStateToProps = (state) => {
  return {
    length: state.todos.length
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (id, text) => {
      dispatch({
        type: 'ADD_TODO', 
        id: id,
        completed: false,
        text: text
      })
    }
  }
};

const NewTodoAddForm = connect(mapStateToProps, mapDispatchToProps)(TodoAddForm)

export default NewTodoAddForm;