import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./producttypes/ProductTypesProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"

// console.log("EMMMM", EmployeeList)
// console.log("LOCCCC", LocationList)

export const ApplicationViews = (props) => {
  return (
    <>
      {/* Location */}
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* Product */}
      <ProductProvider>
        <ProductTypeProvider>
          <Route path="/products">
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route path="/employees" render={(props) => <EmployeeList {...props} />} />
          <Route path="/employees/create" render={(props) => <EmployeeForm {...props} />} />
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}
