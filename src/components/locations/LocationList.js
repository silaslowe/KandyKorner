import { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("Location: Initial render")
    getLocations()
  }, [])

  return (
    <div className="locations">
      <h1>Locations</h1>
      {locations.map((loc) => (
        <Location key={loc.id} loc={loc} />
      ))}
    </div>
  )
}
