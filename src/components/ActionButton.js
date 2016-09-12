import React, { PropTypes } from 'react';

const ActionButton = ({ text, onClick }) => (
  <button onClick={onClick} style={{ margin: '0 3px' }}>
    {text}
  </button>   
);

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ActionButton;