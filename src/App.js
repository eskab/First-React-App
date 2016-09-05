import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';

import todoReducer from './todo/todoReducer';
import TodoAddForm from './todo/TodoAddForm';

const store = createStore(todoReducer, { todos: [] });
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
let customId = 0;

let DATA = [
  {id: 0, description: 'In React, inline styles are not specified as a string. Instead they are specified with an object whose key', completed: false},
  {id: 1, description: 'Access current weather data for any location on Earth including over 200,000 cities!', completed: false},
  {id: 2, description: 'The next thing you’ll need to do is add this data to the App components as its props.', completed: false},
  {id: 3, description: 'Below, you’ll see how you pass the data into the App component, by simply changing a little bit on the ReactDOM.render method.', completed: false},
  {id: 4, description: 'I recently started working with ReactJS. Specifically, I am utilizing the react-rails ruby gem and react-bootstrap components.', completed: false},
  {id: 5, description: 'When fetching data asynchronously, use componentWillUnmount to cancel any outstanding requests before the component is unmounted.', completed: false},
  {id: 6, description: 'IT to z pewnością rynek pracownika, co oznacza, że ma on często duży wpływ na kształtowanie warunków umowy o pracę.', completed: false},
  {id: 7, description: 'Re: transpiling with Babel, its caveats page says that Array.from is required for spread, but at present ', completed: false}
];

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
              id: customId++
            })
          } 
        />
        <ul>
          {store.getState().todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
