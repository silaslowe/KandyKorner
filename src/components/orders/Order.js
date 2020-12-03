import React from "react"

export const Order = ({ order }) => (
  <section className="order">
    <h3>{order.product.candyName}</h3>
    <p>${order.product.price}</p>
  </section>
)
