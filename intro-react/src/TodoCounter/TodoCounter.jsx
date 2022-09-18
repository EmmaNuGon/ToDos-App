import React from "react";
import "./todoCounter.css"

import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if (completedTodos === 0 && totalTodos > 0) {
    return <h1>No has completado ningun TODOs</h1>;
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
