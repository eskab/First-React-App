import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import DATA from './data';
import todos from './reducers';
import App from './App';

const store = createStore(todos, { todos: [...DATA], filter: 'ALL' });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);