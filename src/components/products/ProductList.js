import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../producttypes/ProductTypesProvider"
import { Product } from "./Product"

export const ProductList = () => {
  const { products, searchTerm, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    getProductTypes().then(getProducts)
  }, [])

  useEffect(() => {
    if (searchTerm !== "") {
      const subset = products.filter((product) =>
        product.candyName.toLowerCase().includes(searchTerm)
      )
      setFilteredProducts(subset)
    } else {
      setFilteredProducts(products)
    }
  }, [searchTerm, products])

  return (
    <div className="products">
      {filteredProducts.map((product) => {
        const productTypeFromId = productTypes.find((pt) => pt.id === product.productTypeId)

        return <Product key={product.id} product={product} productType={productTypeFromId} />
      })}
    </div>
  )
}
