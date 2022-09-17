import React from "react";

function TodoSearch({ search, setSearch }) {
  const onSearchValueChange = (e) => {
    setSearch(e.target.value);
  };

  return [
    <input
      type="text"
      placeholder="ToDos...."
      value={search}
      onChange={onSearchValueChange}
    />,
    <p>{search}</p>,
  ];
}

export default TodoSearch;
