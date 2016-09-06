import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="todo-container">
        {this.props.store.getState().todos.map(todo => 
          <TodoItem
            key={todo.id}
            todo={todo}
            store={this.props.store}
          />
        )}
      </ul>
    );
  }
}