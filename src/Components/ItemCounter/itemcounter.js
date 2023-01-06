import React from 'react'
import './itemcounter-styles.css'
import { ItemContext } from '../ItemContext'

const ItemCounter = () => {
  const { totalTask, completedTasks } = React.useContext(ItemContext)

  return (
    <>
      <h2 className="counter-title">
        Has completado {completedTasks} de {totalTask} tareas
      </h2>
    </>
  )
}

export default ItemCounter
