import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super();
    this.state = { value: props.text }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <li>
        <div>
          <span style={{textDecoration: this.props.completed ? 'line-through' : 'none', display: this.props.editMode ? 'none' : 'block'}}>{this.props.text}</span>
          <input 
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.props.applyEdit}
            style={{display: this.props.editMode ? 'block' : 'none'}} 
            value={this.state.value}
            ref="editTodoInput"
          />
        </div>
        <div>
          <button onClick={this.props.edit}>&#x2702;</button>
          <button onClick={this.props.delete}>&#x2716;</button>
          <button onClick={this.props.toggle}>&#x2714;</button>
        </div>
      </li>
    );
  }
}