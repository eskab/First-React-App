import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from './actions/todos';

import Spinner from './containers/Spinner';
import TodoAddForm from './containers/TodoAddForm';
import TodoList from './containers/TodoList';
import TodoFilterButton from './containers/TodoFilterButton';
import MarkAllButton from './containers/MarkAllButton';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos())
  }

  render() {
    return (
      <div className="my-app">
        <h1>Todo App</h1>
        <Spinner />
        <TodoAddForm />
        <TodoList />
        <TodoFilterButton text="All" filter="ALL" />
        <TodoFilterButton text="Active" filter="ACTIVE" />
        <TodoFilterButton text="Completed" filter="COMPLETED" />
        <MarkAllButton text="Mark all" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    pending,
    items
  } = state.todos

  return {
    pending,
    items
  }
}

export default connect(mapStateToProps)(App)