var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');
var departmentController = require('../controllers/department');
var employeeController = require('../controllers/employee');

//User Routes
router.post('/authenticate-user-login', userController.authenticateUserLogIn);

//Department Routes
router.get('/list-departments', departmentController.listDepartments);
router.post('/update-department/:id', departmentController.updateDepartment);
router.post('/add-department', departmentController.createDepartment);

//Employee Routes
router.get('/list-employees', employeeController.listEmployees);
router.post('/update-employee/:id', employeeController.updateEmployee);
router.post('/add-employee', employeeController.createEmployee);


module.exports = router;
