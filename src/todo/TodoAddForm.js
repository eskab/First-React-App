import React, { Component } from 'react';

export default class TodoAdd extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="todo-add-new">
        <input ref={node => {
          this.input = node;
        }} />
        <button 
          onClick={() => {
            this.props.store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: this.props.store.getState().todos.length,
              completed: false
            })
            this.input.value = '';
          }}
        >
          Add
        </button>
      </div>
    );
  }
};