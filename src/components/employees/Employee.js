import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const Employee = ({ employee, props }) => {
  const { removeEmployee } = useContext(EmployeeContext)
  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <p className="employee__location">{employee.location.name}</p>
      <button
        className="btn-delete"
        onClick={() =>
          removeEmployee(employee.id).then(() => {
            props.history.push("/employees")
          })
        }
      >
        Fire!
      </button>
    </section>
  )
}
