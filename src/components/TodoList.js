import React, { PropTypes } from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, del, toggle, edit, applyChanges }) => {
  return (
    <ul className="todo-container">
      {todos.map(t => 
        <TodoItem 
          key={t.id}
          {...t}
          del={() => del(t.id)}
          toggle={() => toggle(t.id, t.text, !t.completed)}
          edit={() => edit(t.id, t.editMode)}
          applyChanges={(e) => {
            if (e.key === 'Enter') {
              const isChanged = t.text !== e.target.value;

              applyChanges(t.id, e.target.value, (isChanged) ? false : completed);
            }
          }}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editMode: PropTypes.bool
  }).isRequired).isRequired,
  del: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  applyChanges: PropTypes.func.isRequired
}

export default TodoList;