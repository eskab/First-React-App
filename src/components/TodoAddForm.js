import React, { PropTypes } from 'react';

const handleAddTodo = (e, id, cb, input) => {
  if (e.type === 'keypress' && e.key !== 'Enter' || !input.value) {
    return;
  }

  cb(id, input.value);
};

const TodoAddForm = ({ length, handler }) => {
  let input;

  return (
    <div className="todo-add-new">
      <input onKeyPress={(e) => handleAddTodo(e, length, handler, input)} ref={node => { input = node; }} />
      <button onClick={(e) => handleAddTodo(e, length, handler, input)}>Add</button>
    </div>
  )
};

TodoAddForm.propTypes = {
  handler: PropTypes.func.isRequired
};

export default TodoAddForm;