import React from "react";
import "../css/todoCounter.css";

function TodoCounter({ total, completed }) {
  if (completed === 0 && total > 0) {
    return <h1>No has completado ningun TODOs</h1>;
  }
  return (
    <div className="todoCounter">
      <h1>
        has completado {completed} de {total} TODOs
      </h1>
    </div>
  );
}

export default TodoCounter;
