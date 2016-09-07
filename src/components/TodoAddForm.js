import React, { PropTypes } from 'react';

const handleAddTodo = (e, id, cb) => {
  console.log(e);
};

const TodoAddForm = ({ todos, handler }) => (
  <div className="todo-add-new">
    <input onKeyPress={(e) => handleAddTodo(e, todos.length, handler)} />
    <button onClick={(e) => handleAddTodo(e, todos.length, handler)}>Add</button>
  </div>
);

TodoAddForm.propTypes = {
  handler: PropTypes.func.isRequired
};

export default TodoAddForm;

// import React, { Component } from 'react';

// export default class TodoAdd extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.handleAddAction = this.handleAddAction.bind(this);
//   }

//   handleAddAction(e) {
//     if (e.type === 'keypress' && e.key !== 'Enter' || !this.refs.addNewTodo.value) {
//       return;
//     }

//     this.props.store.dispatch({
//       type: 'ADD_TODO',
//       text: this.refs.addNewTodo.value,
//       id: this.props.store.getState().todos.length,
//       completed: false
//     });
//     this.refs.addNewTodo.value = '';
//   }

//   render() {
//     return (
//       <div className="todo-add-new">
//         <input onKeyPress={this.handleAddAction} ref="addNewTodo" />
//         <button onClick={this.handleAddAction}>Add</button>
//       </div>
//     );
//   }
// };