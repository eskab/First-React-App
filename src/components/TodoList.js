import React, { PropTypes } from 'react';

import TodoItem from './TodoItem';

const TodoList = ({todos, cbDelete, cbToggle, cbEdit, cbApplyChanges}) => {
  return (
    <ul className="todo-container">
      {todos.map(t => 
        <TodoItem 
          key={t.id}
          {...t}
          delete={() => cbDelete(t.id)}
          toggle={() => cbToggle(t.id)}
          edit={() => cbEdit(t.id, t.editMode)}
          applyChanges={(e) => {
            if (e.key === 'Enter') {
              const isChanged = t.text !== e.target.value;

              cbApplyChanges(t.id, isChanged, t.completed, e.target.value);
            }
          }}
        />
      )}
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editMode: PropTypes.bool
  }).isRequired).isRequired,
  cbDelete: PropTypes.func.isRequired,
  cbToggle: PropTypes.func.isRequired,
  cbEdit: PropTypes.func.isRequired,
  cbApplyChanges: PropTypes.func.isRequired
};

export default TodoList;