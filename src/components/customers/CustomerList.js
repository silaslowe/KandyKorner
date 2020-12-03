import React, { useState, useEffect, useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import { OrderContext } from "../orders/OrderProvider"
import { Customer } from "./Customer"

export const CustomerList = (props) => {
  const { customers, getCustomers } = useContext(CustomerContext)
  const { orders, getOrders } = useContext(OrderContext)

  useEffect(() => {
    getCustomers().then(getOrders)
  }, [])

  return (
    <div>
      <h1>Yer Customers</h1>
      {customers
        .map((customer) => {
          customer.orders = orders.filter((o) => o.customerId === customer.id)
          return <Customer key={customer.id} customer={customer} />
        })
        .sort((a, b) => {
          return b.props.customer.orders.length - a.props.customer.orders.length
        })}
    </div>
  )
}
