import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        <div>
          <span style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.text}</span>
        </div>
        <div>
          <button onClick={this.props.delete}>&#x2716;</button>
          <button onClick={this.props.toggle}>&#x2714;</button>
        </div>
      </li>
    );
  }
}