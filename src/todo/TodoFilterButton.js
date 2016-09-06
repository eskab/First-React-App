import React, { Component } from 'react';

export default class TodoFilterbutton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button onClick={() =>
        this.props.store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: this.props.filter
        })
      }
      >
        {this.props.value}
      </button>      
    );
  }
}