import React from "react";
import TodoCounter from "./components/TodoCounter.jsx";
import TodoSearch from "./components/TodoSearch.jsx";
import TodoList from "./components/TodoList.jsx";
import CreateTodoButton from "./components/CreateTodoButton.jsx";
import TodoItem from "./components/TodoItem";

function AppUI({
  totalTodos,
  completedTodos,
  search,
  setSearch,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
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

      <CreateTodoButton />
    </>
  );
}

export default AppUI;
