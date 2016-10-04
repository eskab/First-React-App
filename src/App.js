import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from './actions/todos';

import Spinner from './containers/Spinner';
import TodoAddForm from './containers/TodoAddForm';
import TodoList from './containers/TodoList';
import Footer from './components/Footer';
import TodoFilterButton from './containers/TodoFilterButton';
import MarkAllButton from './containers/MarkAllButton';
import DeleteMarkedButton from './containers/DeleteMarkedButton';

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
        <Footer />
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