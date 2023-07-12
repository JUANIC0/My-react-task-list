import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import Tareas from './components/Tareas';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo } = useTodo();

  return (
    <Router>
      <Menu />
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>
        <div className="counter-todos">
          <h3>Numero Tareas: {todosCount}</h3>
          <h3>Pendientes: {pendingTodosCount}</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas todos={todos} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
