import React from "react";
import "./todoCounter.css"

import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if (!completedTodos && !totalTodos) {
    return <h1>No tienes TODOs</h1>;
  }
  return (
    <div className="todoCounter">
      <h1>
        has completado {completedTodos} de {totalTodos} TODOs
      </h1>
    </div>
  );
}

export default TodoCounter;
