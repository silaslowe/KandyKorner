import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const name = useRef(null)
  const location = useRef(null)
  const manager = useRef(null)
  const fullTime = useRef(null)
  const rate = useRef(null)

  useEffect(() => {
    getLocations()
  }, [])

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value)
    const employeeRate = parseFloat(rate.current.value)
    let managerBool = ""
    let fullTimeBool = ""

    if (manager.current.value === "1") {
      managerBool = true
    } else {
      managerBool = false
    }

    if (fullTime.current.value === "1") {
      fullTimeBool = true
    } else {
      fullTimeBool = false
    }

    if (locationId === 0 || fullTime === "0" || manager === "0") {
      window.alert("Please Fill Out Form Completely")
    } else {
      addEmployee({
        name: name.current.value,
        manager: managerBool,
        fullTime: fullTimeBool,
        rate: employeeRate,
        locationId,
      }).then(() => props.history.push("/employees"))
    }
  }
  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>

      {/* Name */}
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee Name"
          />
        </div>
      </fieldset>

      {/* Location */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to Location</label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a Location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Manager */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager">Manager?</label>
          <select
            defaultValue=""
            name="manager"
            ref={manager}
            id="manager"
            className="form-control"
          >
            <option value="0">Manager?</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </fieldset>

      {/* Full Time */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="fullTime">Full Time?</label>
          <select
            defaultValue=""
            name="fullTime"
            ref={fullTime}
            id="fullTime"
            className="form-control"
          >
            <option value="0">Full Time?</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </fieldset>

      {/* Rate */}

      <fieldset>
        <div className="form-group">
          <input
            type="text"
            id="employeeRate"
            ref={rate}
            required
            className="form-control"
            placeholder="Employee Rate"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(ev) => {
          ev.preventDefault()
          constructNewEmployee()
          props.history.push("/employees/create")
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  )
}
