import { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../producttypes/ProductTypesProvider"
import { Product } from "./Product"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  useEffect(() => {
    getProductTypes().then(getProducts)
  }, [])

  return (
    <div className="products">
      {products.map((product) => {
        const productTypeFromId = productTypes.find((pt) => pt.id === product.productTypeId)

        return <Product key={product.id} product={product} productType={productTypeFromId} />
      })}
    </div>
  )
}
