import { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { InventoriesContext, InventoriesProvider } from "../inventory/InventoryProvider"
import { Location } from "./Location"
import { Link } from "react-router-dom"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const { inventories, getInventories } = useContext(InventoriesContext)

  useEffect(() => {
    console.log("Location: Initial render")
    getLocations()
      .then(getInventories)
      .then(() => console.log(inventories))
  }, [])

  return (
    <div>
      {locations.map((location) => {
        location.inventory = inventories.filter((i) => i.locationId === location.id)
        console.log(location)
        return (
          <article
            key={`location--${location.id}`}
            className="card location"
            style={{ width: `18rem` }}
          >
            <section className="card-body">
              <Link
                className="card-body"
                to={{
                  pathname: `/locations/${location.id}`,
                  state: { chosenLocation: location },
                }}
              >
                <h2 className="card-title">{location.name}</h2>
              </Link>
            </section>
          </article>
        )
      })}
    </div>
  )
}
