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
import { OrderProvider } from "./orders/OrderProvider"
import { OrderList } from "./orders/OrderList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"

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
        <OrderProvider>
          <ProductTypeProvider>
            <Route path="/products">
              <ProductList />
            </Route>
          </ProductTypeProvider>
        </OrderProvider>
      </ProductProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route path="/employees" render={(props) => <EmployeeList {...props} />} />
          <Route path="/employees/create" render={(props) => <EmployeeForm {...props} />} />
        </LocationProvider>
      </EmployeeProvider>

      <OrderProvider>
        <Route path="/orders/" render={(props) => <OrderList {...props} />} />
      </OrderProvider>

      <CustomerProvider>
        <OrderProvider>
          <Route path="/customers" render={(props) => <CustomerList {...props} />} />
        </OrderProvider>
      </CustomerProvider>
    </>
  )
}
