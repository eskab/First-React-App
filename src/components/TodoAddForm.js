import React, { PropTypes } from 'react';

const randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

const handleAddTodo = (e, id, input, cb) => {
  if (e.type === 'keypress' && e.key !== 'Enter' || !input.value) {
    return;
  }

  cb(randomString(16), input.value);
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