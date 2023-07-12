import React, { useState } from 'react';

export const TodoAdd = ({ handleNewTodo }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const onFormSubmit = e => {
    e.preventDefault();

    if (task.name.length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    let newTodo = {
      id: new Date().getTime(),
      name: task.name,
      description: task.description,
      done: false,
    };

    handleNewTodo(newTodo);
    setTask({ name: '', description: '' });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        placeholder="Nombre de la tarea"
      />

      <textarea
        className="input-add"
        name="description"
        value={task.description}
        onChange={handleInputChange}
        placeholder="Descripción de la tarea"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
