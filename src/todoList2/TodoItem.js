import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [text, setText] = useState(todo.text);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleUpdate();
    }
  };

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setText(todo.text);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <>
          <input type="text" value={text} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
