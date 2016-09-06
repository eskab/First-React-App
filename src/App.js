import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';

import DATA from './data';
import todoReducer from './todo/todoReducer';
import TodoAddForm from './todo/TodoAddForm';
import TodoList from './todo/TodoList';

const store = createStore(todoReducer, { todos: [...DATA] });
store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')));

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="my-first-react-app">
        <h1>Todo App</h1>
        <TodoAddForm
          add={() =>
            store.dispatch({
              type: 'ADD_TODO',
              text: document.getElementById('addNewTodo').value,
              id: store.getState().todos.length,
              completed: false
            })
          } 
        />
        <TodoList
          store={store}
        />
      </div>
    );
  }
}
