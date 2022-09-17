import React, {useState} from "react";
import AppUI from './AppUI'

//import './App.css';

//const defaultTodos = [
//  { text: "Cortar cebolla", completed: false },
//  { text: "Ver curso de react", completed: false },
//  { text: "Hacer ejercicios", completed: false },
//];

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
  localStorage.setItem(itemName, JSON.stringify(initialValue));
  parsedItem= initialValue;
  
  }else{
   parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
   };
}


function App() {

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])
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

  return (
   <AppUI
   totalTodos={totalTodos}
    completedTodos={completedTodos}
    search={search} 
    setSearch={setSearch}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
   />
  );
}

export default App;
