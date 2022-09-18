import React from 'react'
import {TodoContext} from '../TodoContext/index'

function TodoForm() {
const [newTodoValue, setNewTodoValue] = React.useState("");

const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext)

    const onChange = (e) => {
     setNewTodoValue(e.target.value)
    }
    
    const onCancel = (e) => {
       setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
       addTodo(newTodoValue) 
       setOpenModal(false)
    }
  return (
    <form onSubmit={onSubmit}>
    <label>...</label>
    <textarea 
    value={newTodoValue}
    onChange={onChange}
    placeholder='ToDos'/>
    <div>
        <button  type= "button" onClick={onCancel}>Cancelar</button>

        <button type= "submit" onClick={onSubmit}>Añadir</button>
    </div>
    </form>
  )
}

export default TodoForm