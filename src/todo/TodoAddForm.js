import React, { Component } from 'react';

export default class TodoAdd extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="todo-add-new">
        <input ref="addNewTodo" />
        <button 
          onClick={() => {
            this.props.store.dispatch({
              type: 'ADD_TODO',
              text: this.refs.addNewTodo.value,
              id: this.props.store.getState().todos.length,
              completed: false
            })
            this.refs.addNewTodo.value = '';
          }}
        >
          Add
        </button>
      </div>
    );
  }
};