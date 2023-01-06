import React from 'react'
import './createitem-styles.css'

const CreateItem = (props) => {
  const onClickButton = () => {
    //devuelve el estado anterior pero negandolo, si estaba true devuelve false
    //es un toggle
    console.log('lopo')
    props.setOpenModal((prevState) => !prevState)
  }

  return (
    <>
      <button className="create-button" onClick={onClickButton}>
        +
      </button>
    </>
  )
}

export default CreateItem
