import React, { useContext } from "react"
import { OrderContext } from "../orders/OrderProvider"

export const Product = ({ product, productType }) => {
  const { addOrder } = useContext(OrderContext)
  console.log(localStorage)
  return (
    <section className="product">
      <h3 className="product__name">{product.candyName}</h3>
      <div className="product__price">Price: {product.price}</div>
      <div className="product__id">ID: {product.id}</div>
      <div className="product__type">Type: {productType.productType}</div>
      <button
        className="btn purchase-btn"
        onClick={() =>
          addOrder({
            productId: parseInt(product.id),
            customerId: parseInt(localStorage.kandy_customer),
          })
        }
      >
        Purchase
      </button>
    </section>
  )
}
