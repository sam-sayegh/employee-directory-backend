var express = require('express');
var router = express.Router();

var departmentController = require('../controllers/department');

router.get('/list-departments', departmentController.listDepartments);
router.post('/update-department/:id', departmentController.updateDepartment);

module.exports = router;
