import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductSearch = () => {
  const { setSearchTerm } = useContext(ProductContext)

  return (
    <>
      ProductSearch
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => {
          setSearchTerm(keyEvent.target.value)
        }}
        placeholder="Search for a product..."
      />
    </>
  )
}
