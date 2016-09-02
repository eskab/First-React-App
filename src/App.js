import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const DATA = [
  {id: 0, description: 'In React, inline styles are not specified as a string. Instead they are specified with an object whose key'},
  {id: 1, description: 'Access current weather data for any location on Earth including over 200,000 cities!'},
  {id: 2, description: 'The next thing you’ll need to do is add this data to the App components as its props.'},
  {id: 3, description: 'Below, you’ll see how you pass the data into the App component, by simply changing a little bit on the ReactDOM.render method.'},
  {id: 4, description: 'I recently started working with ReactJS. Specifically, I am utilizing the react-rails ruby gem and react-bootstrap components.'},
  {id: 5, description: 'When fetching data asynchronously, use componentWillUnmount to cancel any outstanding requests before the component is unmounted.'},
  {id: 6, description: 'IT to z pewnością rynek pracownika, co oznacza, że ma on często duży wpływ na kształtowanie warunków umowy o pracę.'},
  {id: 7, description: 'Re: transpiling with Babel, its caveats page says that Array.from is required for spread, but at present '}
];

const TaskListStyles = {
  listStyle: 'none',
  padding: '0',
  margin: '0'
};

const TaskStyles = {
  color: '#555',
  padding: '10px',
  margin: '5px 0',
  fontSize: '11px',
  backgroundColor: '#eee',
  textTransform: 'uppercase',
  letterSpacing: '1px'
}

const Task = React.createClass({
  render: function() {
    return (
      <li style={TaskStyles}><span>{this.props.description}</span></li>
    );
  }
});

const TaskList = React.createClass({
  render: function() {
    return (
      <ul style={TaskListStyles} className="task-container">
        {this.props.data.map(function(result) {
          return <Task key={result.id} description={result.description} />;
        })}
      </ul>
    );
  }
});

export default class App extends Component {
  render() {
    return (
      <div className="my-first-react-app">
        <h1>List of tasks</h1>
        <TaskList data={DATA} />
      </div>
    );
  }
}
