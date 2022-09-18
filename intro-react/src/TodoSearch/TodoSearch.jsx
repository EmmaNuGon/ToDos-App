import React from "react";
import { TodoContext } from "../TodoContext";
import "../TodoSearch/TodoSearch.css"

function TodoSearch() {
  const { search, setSearch } = React.useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearch(e.target.value);
  };

  return [
    <input
      type="text"
      placeholder="ToDos...."
      value={search}
      onChange={onSearchValueChange}
      className="TodoSearch"
    />,
    <p>{search}</p>,
  ];
}

export default TodoSearch;
