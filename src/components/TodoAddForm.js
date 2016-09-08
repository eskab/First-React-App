import React, { PropTypes } from 'react';

const handleAddTodo = (e, id, input, cb) => {
  if (e.type === 'keypress' && e.key !== 'Enter' || !input.value) {
    return;
  }

  cb(id, input.value);
  input.value = '';
};

const TodoAddForm = ({ length, handler }) => {
  let input;

  return (
    <div className="todo-add-new">
      <input onKeyPress={(e) => handleAddTodo(e, length, input, handler)} ref={node => { input = node; }} />
      <button onClick={(e) => handleAddTodo(e, length, input, handler)}>Add</button>
    </div>
  )
};

TodoAddForm.propTypes = {
  length: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
};

export default TodoAddForm;