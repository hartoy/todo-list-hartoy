import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const ItemContext = React.createContext()

function ItemProvider(props) {
  const { item: tasks, saveItem: setTask, loading, error } = useLocalStorage('tasks_v1', [])
  const [word, setWord] = useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTasks = tasks.filter((tasks) => tasks.completed === true).length
  const totalTask = tasks.length

  let searchedTasks = []

  if (!word.length >= 1) {
    searchedTasks = tasks
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase()
      const searchText = word.toLowerCase()
      return taskText.includes(searchText)
    })
  }

  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTasks = [...tasks]
    newTasks.push({
      completed: false,
      text,
    })
    setTask(newTasks)
  }

  //Esta funcion cada vez que recibe un texto va a buscar cual de todas las task
  //tiene el texto que estamos enviando como parametro. Luego clona la lista de tasks
  //y al que coincida con el texto se le pone parametro completed a true
  // despues se actualiza el estado de tasks con los que tengan true
  const completeTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text)
    const newTasks = [...tasks]
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    setTask(newTasks)
  }

  //lo mismo pero para borrar
  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text)
    const newTasks = [...tasks]
    //cortas el array, que cortas y cuanto cortas
    newTasks.splice(taskIndex, 1)
    setTask(newTasks)
  }

  return (
    <ItemContext.Provider
      value={{
        totalTask,
        completedTasks,
        word,
        setWord,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        loading,
        error,
        addTodo,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export { ItemContext, ItemProvider }
