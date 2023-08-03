import { useState } from 'react';
import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
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
      <Box p="4" boxShadow="md" borderRadius="lg" maxW="700px" mx="auto">
        <Heading textAlign="center" size="2xl">Lista de Tareas</Heading>
        <Flex justify="space-around" mt="4">
          <Heading size="lg">Numero Tareas: {todosCount}</Heading>
          <Heading size="lg">Pendientes: {pendingTodosCount}</Heading>
        </Flex>
        <Box mt="4">
          <TodoAdd handleNewTodo={handleNewTodo} />
        </Box>
        <List mt="4">
          <TodoList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </List>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas todos={todos} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
