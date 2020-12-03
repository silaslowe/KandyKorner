import React, { useState } from "react"

export const OrderContext = React.createContext()

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    return fetch("http://localhost:8088/orders?_expand=product")
      .then((res) => res.json())
      .then(setOrders)
  }

  const getOrdersById = (id) => {
    return fetch(`http://localhost:8088/orders/${id}`)
  }

  const addOrder = (order) => {
    return fetch("http://localhost:8088/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then(getOrders)
  }
  return (
    <OrderContext.Provider value={{ orders, getOrders, addOrder, getOrdersById }}>
      {props.children}
    </OrderContext.Provider>
  )
}
