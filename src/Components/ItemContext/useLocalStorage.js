import React, { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        //preguntando si localstorage no existe y creandolo en ese caso
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  })

  //funcion para que persista el array de tasks en localstorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (errror) {
      setError(error)
    }
  }
  return { item, saveItem, loading, error }
}

export { useLocalStorage }
