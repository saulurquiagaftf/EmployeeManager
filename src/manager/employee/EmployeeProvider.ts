import { CreateEmployeeDTO } from "../../dto/CreateEmployee";
import { UpdateEmployeeDto } from "../../dto/UpdateEmployee";
import { Employee } from "../../models/Employee";
import { EmployeeManager } from "./EmployeeManager";

export class EmployeeProvider implements EmployeeManager {
    private employees: Employee[];
  
    constructor() {
      this.employees = [];
    }

    createEmployee(employeeDto: CreateEmployeeDTO): Employee {
        const id = this.employees.length + 1;
        const employee: Employee = { id, ...employeeDto };
        this.employees.push(employee);
        return employee;
    }

    updateEmployee(employeeDto: UpdateEmployeeDto): Employee | null {
        const index = this.employees.findIndex(emp => emp.id === employeeDto.id);
        if (index === -1) return null;

        const employee: Employee = { ...this.employees[index], ...employeeDto };
        this.employees[index] = employee;
        return employee;
    }
  
    getAllEmployees(): Employee[] {
      return this.employees;
    }
  
    getEmployeeById(id: number): Employee | undefined {
      return this.employees.find(emp => emp.id === id);
    }
  
    deleteEmployee(id: number): boolean {
      const index = this.employees.findIndex(emp => emp.id === id);
      if (index === -1) return false;
      
      this.employees.splice(index, 1);
      return true;
    }
  }