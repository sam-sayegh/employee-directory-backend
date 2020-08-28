const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const departmentController = require('../controllers/department');
const employeeController = require('../controllers/employee');

// User Routes
router.post('/authenticate-user-login', userController.authenticateUserLogIn);

// Department Routes
router.get('/list-departments', userController.authenticateToken, departmentController.listDepartments);
router.get('/list-all-departments', userController.authenticateToken, departmentController.listAllDepartments);
router.get('/get-department-data/:id', userController.authenticateToken, departmentController.getDepartmentData);
router.post('/update-department', userController.authenticateToken, departmentController.updateDepartment);
router.post('/add-department', userController.authenticateToken, departmentController.createDepartment);

// Employee Routes
router.get('/list-employees', userController.authenticateToken, employeeController.listEmployees);
router.get('/load-managers', userController.authenticateToken, employeeController.loadManagers);
router.get('/get-employee-data/:id', userController.authenticateToken, employeeController.getEmployeeData);
router.post('/update-employee', userController.authenticateToken, employeeController.updateEmployee);
router.post('/update-employee-test', employeeController.updateEmployee);
router.post('/add-employee', userController.authenticateToken, employeeController.createEmployee);
router.get('/delete-employee/:id', userController.authenticateToken, employeeController.deleteEmployee);

module.exports = router;
