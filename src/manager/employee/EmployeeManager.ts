import { CreateEmployeeDTO } from "../../dto/CreateEmployee";
import { UpdateEmployeeDto } from "../../dto/UpdateEmployee";
import { Employee } from "../../models/Employee";

export interface EmployeeManager {
    getAllEmployees(): Employee[];
    getEmployeeById(id: number): Employee | undefined;
    createEmployee(employeeDto: CreateEmployeeDTO): Employee;
    updateEmployee(employeeDto: UpdateEmployeeDto): Employee | null;
    deleteEmployee(id: number): boolean;
  }