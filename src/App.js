import React from 'react';

import TodoAddForm from './containers/TodoAddForm';
import TodoList from './containers/TodoList';
import TodoFilterButton from './containers/TodoFilterButton';

const App = () => (
  <div className="my-todo-app">
    <h1>Todo App</h1>
    <TodoAddForm />
    <TodoList />
    <TodoFilterButton text="All" filter="ALL" />
    <TodoFilterButton text="Active" filter="ACTIVE" />
    <TodoFilterButton text="Completed" filter="COMPLETED" />
  </div>
);

export default App;