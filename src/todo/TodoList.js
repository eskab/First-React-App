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
            text={todo.text}
            completed={todo.completed}
            delete={() => 
              this.props.store.dispatch({
                type: 'DELETE_TODO',
                id: todo.id
              })
            }
            toggle={() => 
              this.props.store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              })  
            }
          />
        )}
      </ul>
    );
  }
}