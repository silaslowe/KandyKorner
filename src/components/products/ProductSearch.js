import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductSearch = () => {
  const { setSearchTerms } = useContext(ProductContext)

  return (
    <>
      ProductSearch
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => {
          setSearchTerms(keyEvent.target.value)
        }}
        placeholder="Search for a product..."
      />
    </>
  )
}
