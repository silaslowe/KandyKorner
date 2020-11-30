import React, { useState, useEffect } from "react"

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(setEmployees)
  }

  const getEmployeesWithLoc = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
      .then((res) => res.json())
      .then(setEmployees)
  }

  const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
  }

  const addEmployee = (employee) => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(getEmployeesWithLoc)
  }
  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, getEmployees, getEmployeeById, getEmployeesWithLoc }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}
