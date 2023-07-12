import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <div>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
        <span>{todo.name}</span>
      </div>
      <span>{todo.description}</span> {/* Descripción de la tarea */}
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? 'active' : ''}`}
        ></label>
      </span>
      <button
        className='btn-delete'
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <FaTrash />
      </button>
    </li>
  );
};
