import React from "react"
import { LocationProvider } from "./locations/LocationProvider.js"
import { LocationList } from "./locations/LocationList.js"

export const KandyKorner = (props) => (
  <>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>
)
