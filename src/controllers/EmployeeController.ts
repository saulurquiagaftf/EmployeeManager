import { CreateEmployeeDTO } from "../dto/CreateEmployee";
import { UpdateEmployeeDto } from "../dto/UpdateEmployee";
import { EmployeeManager } from "../manager/employee/EmployeeManager";
import { Request, Response } from 'express';

export class EmployeeController {
  private employeeManager: EmployeeManager;

  constructor(employeeManager: EmployeeManager) {
    this.employeeManager = employeeManager;
  }

  getAllEmployees(req: Request, res: Response): void {
    res.json(this.employeeManager.getAllEmployees());
  }

  getEmployeeById(req: Request, res: Response): void {
    const employeeId = parseInt(req.params.id);
    const employee = this.employeeManager.getEmployeeById(employeeId);
    if (!employee){
      res.status(404).send('Employee not found');
      return;
    }

    res.json(employee);
  }

  createEmployee(req: Request, res: Response): void {
    const employeeDto: CreateEmployeeDTO = req.body;
    if (!employeeDto.name || !employeeDto.lastName || !employeeDto.post || !employeeDto.department || !employeeDto.salary){
      res.status(400).send('Name, last name, post, department, and salary are required');
      return;
    }
    
    const employee = this.employeeManager.createEmployee(employeeDto);
    res.json(employee);
  }

  updateEmployee(req: Request, res: Response): void {
    const employeeDto: UpdateEmployeeDto = req.body;
    const updatedEmployee = this.employeeManager.updateEmployee(employeeDto);
    if (!updatedEmployee){
      res.status(404).send('Employee not found');
      return
    }

    res.json(updatedEmployee);
  }

  deleteEmployee(req: Request, res: Response): void {
    const employeeId = parseInt(req.params.id);
    const result = this.employeeManager.deleteEmployee(employeeId);
    if (!result){
      res.status(404).send('Employee not found');
      return
    }

    res.send('Employee deleted successfully');
  }
}