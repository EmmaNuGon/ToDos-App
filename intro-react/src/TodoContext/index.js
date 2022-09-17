import React from 'react'
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
      const [search, setSearch] = useState("");
    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!search.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = search.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    
        // todos[todoIndex] = {
        //text: todos[todoIndex].text,
        //completed: true
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
      //React.useEffect(() => {
      // console.log("use effect")
      //}, [])

    return(
        <TodoContext.Provider value={{  
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            completeTodo,
            deleteTodo,

        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider}


