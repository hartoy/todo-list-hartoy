import React from 'react'
import ItemCounter from '../Components/ItemCounter/itemcounter'
import ItemSearch from '../Components/ItemSearch/itemsearch'
import List from '../Components/List/list'
import Item from '../Components/Item/item'
import ItemForm from '../Components/ItemForm/index'
import CreateItem from '../Components/CreateItem/createitem'
import { ItemContext } from '../Components/ItemContext'
import Modal from '../Components/Modal/index'

function AppUI() {
  const { error, loading, searchedTasks, completeTask, deleteTask, openModal, setOpenModal } =
    React.useContext(ItemContext)

  return (
    <div className="container">
      <ItemCounter />

      <ItemSearch />

      <List>
        {/* Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {!loading && !searchedTasks.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTasks.map((todo) => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTask={() => completeTask(todo.text)}
            deleteTask={() => deleteTask(todo.text)}
          />
        ))}
      </List>
      {openModal && (
        <Modal>
          <ItemForm />
        </Modal>
      )}

      <CreateItem setOpenModal={setOpenModal} />
    </div>
  )
}

export default AppUI
