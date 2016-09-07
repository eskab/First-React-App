import React, { PropTypes } from 'react';

const TodoFilterButton = (onClick, text) => (
  <button onClick={onClick} style={{ margin: '0 3px' }}>
    {text}
  </button>   
);

TodoFilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoFilterButton;