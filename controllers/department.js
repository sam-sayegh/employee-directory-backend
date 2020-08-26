'use strict';

const db = require("../models");
const departmentModel = db.departmentModel;
const employeeModel = db.employeeModel;

module.exports = {
    listDepartments: listDepartments,
    updateDepartment: updateDepartment,
    createDepartment: createDepartment,
};


function listDepartments(req, res) {
    departmentModel.findAll({include:{model: employeeModel, required: true, attributes:[['name', 'manager_name']]}}).then(function (data) {
        res.status( 200 ).json( data )
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function updateDepartment(req, res) {
    console.log(req.params, req.body);
    const returnObj = {
        'params':req.params,
        'body':req.body
    };
    res.status( 200 ).json(returnObj);
}

function createDepartment(req, res) {
    console.log(req.params, req.body);
    const returnObj = {
        'params':req.params,
        'body':req.body
    };
    res.status( 200 ).json(returnObj);
}

