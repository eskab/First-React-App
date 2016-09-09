import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import DATA from './data';
import todos from './reducers';
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
  todos, 
  {
    todos: {
      pending: false,
      items: []
    }, 
    filter: 'ALL' 
  },
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);