import React, { useState } from 'react'
import { ItemContext } from '../ItemContext'
import './itemform-styles.css'

function ItemForm({ tasks, setTask }) {
  const [newTaskValue, setNewTaskValue] = useState('')

  const { addTodo, setOpenModal } = React.useContext(ItemContext)

  const onChange = (e) => {
    setNewTaskValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (newTaskValue.length <= 0) return
    addTodo(newTaskValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Describe tu próxima tarea</label>
      <textarea value={newTaskValue} onChange={onChange} placeholder="Detalles de la tarea..." />
      <div className="buttonContainer">
        <button className="buttonBasic button-add" type="submit">
          Añadir
        </button>
        <button className="buttonBasic button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default ItemForm
