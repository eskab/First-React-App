import React, { Component } from 'react';

export default class TodoAdd extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="todo-add-new">
        <input id="addNewTodo" type="text" />
        <button onClick={this.props.add}>Add</button>
      </div>
    );
  }
};