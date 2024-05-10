import express, { Request, Response } from 'express';
import { EmployeeController } from './controllers/EmployeeController';
import { EmployeeProvider } from './manager/employee/EmployeeProvider';

const app = express();
const PORT = 3000;

const employeeProvider = new EmployeeProvider();
const employeeController = new EmployeeController(employeeProvider);

app.use(express.json());

// Employee Endpoints

app.get('/api/employees', (req, res) => employeeController.getAllEmployees(req, res));
app.get('/api/employees/:id', (req, res) => employeeController.getEmployeeById(req, res));
app.post('/api/employees', (req, res) => employeeController.createEmployee(req, res));
app.put('/api/employees', (req, res) => employeeController.updateEmployee(req, res));
app.delete('/api/employees/:id', (req, res) => employeeController.deleteEmployee(req, res));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});