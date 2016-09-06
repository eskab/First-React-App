import React, { Component } from 'react';

import TodoItem from './TodoItem';
import TodoFilterButton from './TodoFilterButton';

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

export default class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    const todos = getTodos(this.props.store.getState().todos, this.props.store.getState().filter);

    return (
      <div>
        <ul className="todo-container">
          {todos.map(todo =>
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              editMode={todo.editMode}
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
              edit={() => 
                this.props.store.dispatch({
                  type: 'TOGGLE_EDIT_TODO',
                  id: todo.id,
                  editMode: (todo.editMode !== undefined) ? !todo.editMode : true
                })  
              }
              applyChanges={(e) => {
                if (e.key === 'Enter') {
                  this.props.store.dispatch({
                    type: 'EDIT_TODO',
                    id: todo.id,
                    editMode: false,
                    text: e.target.value
                  })                    
                }
              }}
            />
          )}
        </ul>
        <div>
          <span>Show:</span>
          <TodoFilterButton store={this.props.store} filter='ALL' value='All' />
          <TodoFilterButton store={this.props.store} filter='ACTIVE' value='Active' />
          <TodoFilterButton store={this.props.store} filter='COMPLETED' value='Completed' />              
        </div>
      </div>
    );
  }
}