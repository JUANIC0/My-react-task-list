import { useState } from "react";
import { Input, Textarea, Button } from "@chakra-ui/react";

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
      <Input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        placeholder="Nombre de la tarea"
      />
      <Textarea
        name="description"
        value={task.description}
        onChange={handleInputChange}
        placeholder="Descripción de la tarea"
      />
      <Button type="submit" className="btn-add">
        Agregar
      </Button>
    </form>
  );
}
