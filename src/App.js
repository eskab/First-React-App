import React, { Component } from 'react';

var ExampleButtonComponent = React.createClass({
  render: function() {
    return (
      <button class="my-super-button"></button>
    );
  }
})

var ExampleFormComponent = React.createClass({
  render: function() {

  }
})

export default class App extends Component {
  render() {
    return (
      <div className="my-first-react-app">
        <h1>my first react app</h1>
        <p>hi yogi</p>
      </div>
    );
  }
}
