import React from 'react'
import './itemsearch-styles.css'
import { ItemContext } from '../ItemContext'

const ItemSearch = () => {
  const { word, setWord } = React.useContext(ItemContext)

  const onSearchValuChange = (e) => {
    console.log(e.target.value)
    setWord(e.target.value)
  }

  return (
    <div className="input-div">
      <input className="work-searcher" value={word} placeholder="Busca tu tarea" onChange={onSearchValuChange} />
    </div>
  )
}

export default ItemSearch
