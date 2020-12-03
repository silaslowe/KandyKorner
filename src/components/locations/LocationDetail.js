import React, { useState } from "react"

export const LocationDetail = (props) => {
  console.log(props.location.state.chosenLocation.inventory.map((i) => i.product.candyName))
  return (
    <section className="location">
      <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
      <address className="location__address">{props.location.state.chosenLocation.address}</address>
      <div>
        <h4>Products</h4>
        {props.location.state.chosenLocation.inventory.map((i) => i.product.candyName).join(", ")}
      </div>
    </section>
  )
}
