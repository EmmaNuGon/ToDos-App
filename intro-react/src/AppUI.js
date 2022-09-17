import React from "react";
import {TodoContext} from "./TodoContext";
import TodoCounter from "./components/TodoCounter.jsx";
import TodoSearch from "./components/TodoSearch.jsx";
import TodoList from "./components/TodoList.jsx";
import CreateTodoButton from "./components/CreateTodoButton.jsx";
import TodoItem from "./components/TodoItem";


function AppUI() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoContext.Consumer>
        {({error,
         loading, 
         searchedTodos,
         completeTodo, 
        deleteTodo}) => (
           <TodoList>
           {error && <p>Hubo un error</p>}
           {loading && <p>Estamos cargando</p>}
           {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}
   
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export default AppUI;
