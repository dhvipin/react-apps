// TodoItem.js
import React from 'react';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{listStyleType:'none'}}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
