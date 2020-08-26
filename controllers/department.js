'use strict';

const db = require("../models");
const departmentModel = db.departmentModel;
const employeeModel = db.employeeModel;
const Sequelize = require('sequelize');

module.exports = {
    listDepartments: listDepartments,
    getDepartmentData: getDepartmentData,
    updateDepartment: updateDepartment,
    createDepartment: createDepartment,
};


function listDepartments(req, res) {
    let pageNumber = req.query.page || 1;
    pageNumber = pageNumber > 0 ? pageNumber : 1;

    let limit = 20;
    let offset = limit * (pageNumber - 1);

    let departmentData = { total: 0, items: {} };
    departmentModel.findAll().then(function (allDepartments) {
        departmentData.total = allDepartments.length;
    });
    departmentModel.findAll({
        offset: offset, limit: limit,
        order: [
            ['id', 'ASC']],
        include: { model: employeeModel, required: false, attributes: [['name', 'manager_name']] }
    }).then(function (data) {
        departmentData.items = data;
        res.status(200).json(departmentData);
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function getDepartmentData(req, res) {
    let departmentId = req.params.id;
    departmentModel.findOne({
        where: { id: departmentId }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function updateDepartment(req, res) {
    let updateDepartmentValues = {
        name: req.body.name,
        description: req.body.description,
        office_number: req.body.office_number,
        manager_id: req.body.manager_id
    }
    departmentModel.update(updateDepartmentValues, { where: { id: req.body.department_id } })
        .then((result) => {
            res.status(200).json({ status: 'success' });
        }).catch(function (err) {
            res.status(500).send(err.stack);
        });
}

function createDepartment(req, res) {
    let insertDepartmentValues = {
        name: req.body.name,
        description: req.body.description,
        office_number: req.body.office_number,
        manager_id: req.body.manager_id || 1,
        date_created: Sequelize.fn('NOW'),
        date_updated: Sequelize.fn('NOW')
    }
    console.log(insertDepartmentValues);
    departmentModel.create(insertDepartmentValues)
        .then((result) => {
            res.status(200).json({ status: 'success' });
        }).catch(function (err) {
            res.status(500).send(err.stack);
        });
}

