import React from 'react'
import "../CreateTodoButton/TodoButton.css"

function CreateTodoButton(props) {

  const onClicButton = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
   <button  className='CreateTodoButton' onClick={onClicButton}>+</button>
  )
}

export default CreateTodoButton