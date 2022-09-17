import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span onClick={props.onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export default TodoItem;
