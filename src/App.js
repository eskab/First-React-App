import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let DATA = [
  {id: 0, description: 'In React, inline styles are not specified as a string. Instead they are specified with an object whose key', done: false},
  {id: 1, description: 'Access current weather data for any location on Earth including over 200,000 cities!', done: false},
  {id: 2, description: 'The next thing you’ll need to do is add this data to the App components as its props.', done: false},
  {id: 3, description: 'Below, you’ll see how you pass the data into the App component, by simply changing a little bit on the ReactDOM.render method.', done: false},
  {id: 4, description: 'I recently started working with ReactJS. Specifically, I am utilizing the react-rails ruby gem and react-bootstrap components.', done: false},
  {id: 5, description: 'When fetching data asynchronously, use componentWillUnmount to cancel any outstanding requests before the component is unmounted.', done: false},
  {id: 6, description: 'IT to z pewnością rynek pracownika, co oznacza, że ma on często duży wpływ na kształtowanie warunków umowy o pracę.', done: false},
  {id: 7, description: 'Re: transpiling with Babel, its caveats page says that Array.from is required for spread, but at present ', done: false}
];

const NewTaskForm = React.createClass({
  render: function() {
    return (
      <form className="new-task-form">
        <input name="newTask" type="text" />
        <button onClick={this.props.add}>Add me</button>
      </form>
    );
  }
});

const Task = React.createClass({
  render() {
    return (
      <li data-id={this.props.id} data-done={this.props.done} className={this.props.done}>
        <div>
          <span>{this.props.description}</span>
        </div>
        <div>
          <button onClick={this.props.del}>X</button>
          <button onClick={this.props.toggle}>Mark</button>
        </div>
      </li>
    );
  }
});

const TaskList = React.createClass({
  render: function() {
    let props = this.props;

    return (
      <ul className="task-container">
        {this.props.data.map(function(result) {
          return <Task key={result.id} id={result.id} description={result.description} done={result.done} del={props.del} toggle={props.toggle} />;
        })}
      </ul>
    );
  }
});

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: DATA };  
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  add(e) {
    e.preventDefault();
    let task = document.getElementsByName('newTask');

    DATA.push({id: DATA.length, description: task[0].value});
    this.setState({data: DATA});    
  }

  toggle(e) {
    e.preventDefault();
    let parent = e.target.parentNode.parentNode;

    DATA[parent.dataset.id].done = !DATA[parent.dataset.id].done;
    this.setState({ data: DATA });
  }  
  
  del(e) {
    e.preventDefault();
    let parent = e.target.parentNode.parentNode;

    DATA.splice(parent.dataset.id, 1);
    this.sortIds(() => {
      this.setState({data: DATA});
    });
  }

  sortIds(cb) {
    for (let i = 0; i < DATA.length; i++) {
      DATA[i].id = i;
    }
    cb();
  }

  render() {
    return (
      <div className="my-first-react-app">
        <h1>List of tasks</h1>
        <NewTaskForm add={this.add} />
        <TaskList data={DATA} del={this.del} toggle={this.toggle} />
      </div>
    );
  }
}
