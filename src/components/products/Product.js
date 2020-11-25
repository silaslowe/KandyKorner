import React from "react"

export const Product = ({ product, productType }) => (
  <section className="product">
    <h3 className="product__name">{product.candyName}</h3>
    <div className="product__price">Price: {product.price}</div>
    <div className="product__id">ID: {product.id}</div>
    <div className="product__type">Type: {productType.productType}</div>
  </section>
)
