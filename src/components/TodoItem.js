import React, { PropTypes } from 'react';

const TodoItem = ({ text, completed, editMode, del, toggle, edit, applyChanges }) => {
  return (
    <li>
      <div>
        { !editMode 
            ? 
            <span 
              style={{textDecoration: completed ? 'line-through' : 'none'}}>
              {text}
            </span> 
            :
            <input 
              defaultValue={text}
              onKeyPress={applyChanges}
            />
        }
      </div>
      <div>
        <button onClick={edit}>&#x2702;</button>
        <button onClick={del}>&#x2716;</button>
        <button onClick={toggle}>&#x2714;</button>
      </div>
    </li> 
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editMode: PropTypes.bool,
  del: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  applyChanges: PropTypes.func.isRequired
};

export default TodoItem;