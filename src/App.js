import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, setFilter } from './actions/todos';

import Spinner from './containers/Spinner';
import TodoAddForm from './containers/TodoAddForm';
import TodoList from './containers/TodoList';
import ActionButton from './containers/ActionButton';

class App extends Component {
  constructor(props) {
    super(props);
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
        <ActionButton text="All" filter="ALL" onClick={setFilter} />
        <ActionButton text="Active" filter="ACTIVE" onClick={setFilter} />
        <ActionButton text="Completed" filter="COMPLETED" onClick={setFilter} />
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