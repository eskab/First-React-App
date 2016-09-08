import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import DATA from './data';
import todoReducer from './reducers/todoReducer';
import App from './App';

const store = createStore(todoReducer, { todos: [...DATA], filter: 'ALL' });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);