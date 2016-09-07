import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import DATA from './data';
import todoReducer from './todo/todoReducer';
import TodoAddForm from './todo/TodoAddForm';
import TodoList from './todo/TodoList';

const store = createStore(todoReducer, {
  todos: [...DATA],
  filter: 'ALL'
});
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
          store={store}
        />
        <TodoList
          store={store}
        />
      </div>
    );
  }
}
