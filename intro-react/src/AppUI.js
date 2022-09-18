import React from "react";
import { TodoContext } from "./TodoContext";
import TodoCounter from "./TodoCounter/TodoCounter";
import TodoSearch from "./TodoSearch/TodoSearch";
import TodoList from "./TodoList/TodoList";
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import TodoItem from "./TodoItem/TodoItem";
import Modal from './modal/index'

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <Modal>
        <p></p>
      </Modal>

      <CreateTodoButton />
    </>
  );
}

export default AppUI;
