import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super();
    this.state = { value: props.text }
  }

  render() {
    return (
      <li>
        <div>
          <span onClick={this.props.edit} style={{textDecoration: this.props.completed ? 'line-through' : 'none', display: this.props.editMode ? 'none' : 'block'}}>{this.props.text}</span>
          <input onKeyPress={this.props.applyEdit.bind(null, this)} style={{display: this.props.editMode ? 'block' : 'none'}} ref="todoEditInput" />
        </div>
        <div>
          <button >&#x2702;</button>
          <button onClick={this.props.delete}>&#x2716;</button>
          <button onClick={this.props.toggle}>&#x2714;</button>
        </div>
      </li>
    );
  }
}