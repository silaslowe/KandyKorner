import { useContext, useEffect } from "react"
import { EmployeeContext, EmployeeProvider } from "./EmployeeProvider"
import { Employee } from "./Employee"

export const EmployeeList = (props) => {
  const { employees, getEmployeesWithLoc } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployeesWithLoc()
  }, [])

  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>Add Employee</button>
      <div className="employeeList">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} props={props} />
        ))}
      </div>
    </div>
  )
}
