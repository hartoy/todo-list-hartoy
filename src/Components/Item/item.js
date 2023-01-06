import React from 'react'
import './item-styles.css'

const Item = (props) => {
  return (
    <li className={`item ${props.completed && 'complete'}`}>
      <span className="item-icon" onClick={props.completeTask}>
        {props.completed ? '✔️' : '❌'}
      </span>
      <p className="item-text"> {props.text} </p>
      <span className="item-icon" onClick={props.deleteTask}>
        🗑️
      </span>
    </li>
  )
}

export default Item
