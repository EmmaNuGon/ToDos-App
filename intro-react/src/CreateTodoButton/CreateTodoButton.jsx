import React from 'react'
import "../CreateTodoButton/TodoButton.css"

function CreateTodoButton(props) {

  const onClicButton = (msg) => {
    alert(msg)
  }

  return (
   <button  className='CreateTodoButton' onClick={() => onClicButton("click")}>+</button>
  )
}

export default CreateTodoButton