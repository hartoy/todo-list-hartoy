import React from 'react'
import './list-styles.css'

const List = (props) => {
  return (
    <>
      <ul>{props.children}</ul>
    </>
  )
}

export default List
