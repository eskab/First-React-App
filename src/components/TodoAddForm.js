import React, { PropTypes } from 'react';

import { randomString } from '../utils';

const handleAddTodo = (e, input, cb) => {
  if (e.type === 'keypress' && e.key !== 'Enter' || !input.value) {
    return;
  }

  cb(randomString(16), input.value);
  input.value = '';
};

const TodoAddForm = ({ handler }) => {
  let input;

  return (
    <div className="todo-add-new">
      <input onKeyPress={(e) => handleAddTodo(e, input, handler)} ref={node => { input = node; }} />
      <button onClick={(e) => handleAddTodo(e, input, handler)}>Add</button>
    </div>
  )
};

TodoAddForm.propTypes = {
  handler: PropTypes.func.isRequired
};

export default TodoAddForm;