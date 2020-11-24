import { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("Location: Initial render")
    getLocations()
    // console.log("AFTER GET IN LIST", locations)
  }, [])
  return (
    <div className="locations">
      {locations.map((loc) => (
        <Location key={loc.id} loc={loc} />
      ))}
    </div>
  )
}
