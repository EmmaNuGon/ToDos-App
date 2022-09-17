import React from 'react'

function CreateTodoButton(props) {

  const onClicButton = (msg) => {
    alert(msg)
  }

  return (
   <button onClick={() => onClicButton("click")}>+</button>
  )
}

export default CreateTodoButton