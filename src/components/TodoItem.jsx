import { Box, IconButton, ListItem } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <ListItem display="flex" justifyContent="space-between" alignItems="center" gap="20px">
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <Box overflow="hidden" cursor="pointer" display="flex" alignItems="center">
        <span>{todo.name}</span>
      </Box>
      <span>{todo.description}</span>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <Box
          className={`container-done ${todo.done ? 'active' : ''}`}
          w="24px"
          h="24px"
          borderRadius="20px"
          border="2px solid var(--verde)"
          cursor="pointer"
        />
      </span>
      <IconButton
        className='btn-delete'
        onClick={() => handleDeleteTodo(todo.id)}
        icon={<FaTrash />}
        borderRadius="50%"
        bg="var(--rojo)"
        color="#fff"
        padding="15px"
        transition="all 0.3s"
        _hover={{ bg: "var(--rojo-hover)" }}
        fontSize="inherit"
        fontFamily="inherit"
      />
    </ListItem>
  );
}
