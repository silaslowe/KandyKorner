import React, { useState, useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { Order } from "./Order"

export const OrderList = (props) => {
  const { orders, getOrders } = useContext(OrderContext)

  useEffect(() => {
    getOrders().then(() => console.log(orders))
  }, [])

  return (
    <>
      <h1>Yer Order</h1>

      {orders
        .filter((orders) => orders.customerId === parseInt(localStorage.kandy_customer))
        .map((order) => {
          return <Order key={order.id} order={order} />
        })}
    </>
  )
}
