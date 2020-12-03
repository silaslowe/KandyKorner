import React, { useState } from "react"

export const InventoriesContext = React.createContext()

export const InventoriesProvider = (props) => {
  const [inventories, setInventories] = useState([])

  const getInventories = () => {
    return fetch("http://localhost:8088/inventories?_expand=product")
      .then((res) => res.json())
      .then(setInventories)
  }

  return (
    <InventoriesContext.Provider value={{ inventories, getInventories }}>
      {props.children}
    </InventoriesContext.Provider>
  )
}
