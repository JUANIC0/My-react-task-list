import React from 'react';
import { TodoList } from './TodoList';

const Tareas = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
  return (
    <div>
      <h2>Listado de Tareas</h2>
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default Tareas;
