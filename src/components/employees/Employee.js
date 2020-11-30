import React from "react"

export const Employee = ({ employee }) => {
  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <p className="employee__location">{employee.location.name}</p>
    </section>
  )
}
