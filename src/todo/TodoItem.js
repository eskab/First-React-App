import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        <div>
          <span style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>{this.props.todo.text}</span>
        </div>
        <div>
          <button onClick={() => 
            this.props.store.dispatch({
              type: 'DELETE_TODO',
              id: this.props.todo.id
            })
          }>
            &#x2716;
          </button>
          <button onClick={() => 
            this.props.store.dispatch({
              type: 'TOGGLE_TODO',
              id: this.props.todo.id
            })  
          }>
            &#x2714;
          </button>
        </div>
      </li>
    );
  }
}