import React, { Component } from 'react';

export default class TodoFilterbutton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button 
        onClick={() =>
          this.props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: this.props.filter
          })
        }
        style={{
          margin: '0 3px'
        }}
      >
        {this.props.value}
      </button>      
    );
  }
}