'use strict';

const db = require("../models");
const employeeModel = db.employeeModel;

module.exports = {
    listEmployees: listEmployees,
    updateEmployee: updateEmployee,
    createEmployee: createEmployee,
};


function listEmployees(req, res) {
    employeeModel.findAll().then(function (data) {
        res.status( 200 ).json( data )
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function updateEmployee(req, res) {
    console.log(req.params, req.body);
    const returnObj = {
        'params':req.params,
        'body':req.body
    };
    res.status( 200 ).json(returnObj);
}

function createEmployee(req, res) {
    console.log(req.params, req.body);
    const returnObj = {
        'params':req.params,
        'body':req.body
    };
    res.status( 200 ).json(returnObj);
}

