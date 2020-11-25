import { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { queryByPlaceholderText } from "@testing-library/react"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
