import React from "react"

export const Customer = ({ customer }) => (
  <div>
    <h3>{customer.name}</h3>
    <p>{customer.orders.length}</p>
  </div>
)
