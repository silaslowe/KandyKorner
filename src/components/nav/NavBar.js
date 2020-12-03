import { React } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      {/* Location */}
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
      </li>
      {/* Products */}
      <li className="navbar__item">
        <Link className="navbar__link" to="/products">
          Products
        </Link>
      </li>
      {/* Employees */}
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">
          Employees
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/orders">
          Orders
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/customers">
          Customers
        </Link>
      </li>
    </ul>
  )
}
