import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
  const { name, description, onInputChange, onResetForm } = useForm({
    name: '',
    description: '',
  });

  const onFormSubmit = e => {
    e.preventDefault();

    if (name.length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    let newTodo = {
      id: new Date().getTime(),
      name: name,
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="name"
        value={name}
        onChange={onInputChange}
        placeholder="Nombre de la tarea"
      />

      <textarea
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Descripción de la tarea"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
