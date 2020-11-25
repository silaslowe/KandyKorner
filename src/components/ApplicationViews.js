import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <ProductProvider>
        <Route path="/products">
          <ProductList />
        </Route>
      </ProductProvider>
    </>
  )
}
