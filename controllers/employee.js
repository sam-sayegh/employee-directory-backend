'use strict';

const db = require("../models");
const employeeModel = db.employeeModel;
const departmentModel = db.departmentModel;
const Sequelize = require('sequelize');
const SequelizeOp = Sequelize.Op;

module.exports = {
    loadManagers: loadManagers,
    listEmployees: listEmployees,
    getEmployeeData: getEmployeeData,
    updateEmployee: updateEmployee,
    createEmployee: createEmployee,
    deleteEmployee: deleteEmployee,
};


function loadManagers(req, res) {
    employeeModel.findAll({where:{is_manager:1}}).then(function (data) {
        res.status(200).json( data )
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function listEmployees(req, res) {
    let whereCondition = {};
    if( req.query.search_term && req.query.search_term !== '' ){
        Object.assign(whereCondition, {'name':{[SequelizeOp.like]:"%" + req.query.search_term + "%"}});
    }
    if( req.query.job_title && req.query.job_title !== '' ){
        Object.assign(whereCondition, {'job_title':req.query.job_title});
    }
    if( req.query.department_id && req.query.department_id ){
        Object.assign(whereCondition, {'department_id':req.query.department_id});
    }
    let pageNumber = req.query.page || 1;
    pageNumber = pageNumber > 0 ? pageNumber : 1;

    let limit = 20;
    let offset = limit * (pageNumber - 1);

    let employeeData = { total: 0, items: {} };
    employeeModel.findAll({where:whereCondition, attributes: ['id']}).then(function (allEmployees) {
        employeeData.total = allEmployees.length;
    });
    employeeModel.findAll({
        where:whereCondition,
        offset: offset, limit: limit,
        order: [
            ['id', 'ASC']],
        include: { model: departmentModel, required: false, attributes: [['name', 'department_name']] }
    }).then(function (data) {
        employeeData.items = data;
        res.status(200).json(employeeData);
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function getEmployeeData(req, res) {
    let employeeId = req.params.id;
    employeeModel.findOne({
        where: { id: employeeId }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function updateEmployee(req, res) {
    let updateEmployeeValues = {
        name: req.body.name,
        country: req.body.country,
        job_title: req.body.job_title,
        phone: req.body.phone,
        email: req.body.email,
        department_id: req.body.department_id
    }
    employeeModel.update(updateEmployeeValues, { where: { id: req.body.employee_id } })
        .then((result) => {
            res.status(200).json({ status: 'success' });
        }).catch(function (err) {
            res.status(500).send(err.stack);
        });
}

function createEmployee(req, res) {
    let insertEmployeeValues = {
        name: req.body.name,
        country: req.body.country,
        job_title: req.body.job_title,
        phone: req.body.phone,
        email: req.body.email,
        gender: '',
        department_id: req.body.department_id,
        picture: "https://randomuser.me/api/portraits/lego/2.jpg",
        date_created: Sequelize.fn('NOW'),
        date_updated: Sequelize.fn('NOW')
    }
    employeeModel.create(insertEmployeeValues)
        .then((result) => {
            res.status(200).json({ status: 'success' });
        }).catch(function (err) {
            res.status(500).send(err.stack);
        });
}

function deleteEmployee(req, res) {
    let employeeId = req.params.id;
    employeeModel.destroy({
        where: { id: employeeId }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

