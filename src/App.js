import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';

import todoReducer from './todo/todoReducer';
import TodoAddForm from './todo/TodoAddForm';

let DATA = [
  {id: 0, text: 'In React, inline styles are not specified as a string. Instead they are specified with an object whose key', completed: false},
  {id: 1, text: 'Access current weather data for any location on Earth including over 200,000 cities!', completed: false},
  {id: 2, text: 'The next thing you’ll need to do is add this data to the App components as its props.', completed: false},
  {id: 3, text: 'Below, you’ll see how you pass the data into the App component, by simply changing a little bit on the ReactDOM.render method.', completed: false},
  {id: 4, text: 'I recently started working with ReactJS. Specifically, I am utilizing the react-rails ruby gem and react-bootstrap components.', completed: false},
  {id: 5, text: 'When fetching data asynchronously, use componentWillUnmount to cancel any outstanding requests before the component is unmounted.', completed: false},
  {id: 6, text: 'IT to z pewnością rynek pracownika, co oznacza, że ma on często duży wpływ na kształtowanie warunków umowy o pracę.', completed: false},
  {id: 7, text: 'Re: transpiling with Babel, its caveats page says that Array.from is required for spread, but at present ', completed: false}
];

const store = createStore(todoReducer, { todos: [...DATA] });
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

// const Task = React.createClass({
//   render() {
//     return (
//       <li data-id={this.props.id} data-done={this.props.completed} className={this.props.completed}>
//         <div>
//           <span>{this.props.description}</span>
//         </div>
//         <div>
//           <button onClick={this.props.del}>&#x2716;</button>
//           <button onClick={this.props.toggle}>&#x2714;</button>
//         </div>
//       </li>
//     );
//   }
// });

// const TaskList = React.createClass({
//   render: function() {
//     let props = this.props;

//     return (
//       <ul className="task-container">
//         {this.props.data.map((result) => {
//           return <Task key={result.id} id={result.id} description={result.description} completed={result.completed} del={props.del} toggle={props.toggle} />;
//         })}
//       </ul>
//     );
//   }
// });

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
              text: document.getElementsByName('newTodo')[0].value,
              id: store.getState().todos.length,
              completed: false
            })
          } 
        />
        <ul className="task-container">
          {store.getState().todos.map(todo => 
            <li key={todo.id} className={todo.completed ? true : false}>
              <div>
                <span>{todo.text}</span>
              </div>
              <div>
                <button onClick={() => 
                  store.dispatch({
                    type: 'DELETE_TODO',
                    id: todo.id
                  })
                }>
                  &#x2716;
                </button>
                <button onClick={() => 
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  })  
                }>
                  &#x2714;
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
//console.log(<button onClick={this.props.toggle}>&#x2714;</button>);
