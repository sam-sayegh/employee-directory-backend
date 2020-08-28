/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable strict */
/* eslint-disable no-use-before-define */

'use strict';

const Sequelize = require('sequelize');
const db = require('../models');

const { departmentModel } = db;
const { employeeModel } = db;

module.exports = {
  listDepartments: listDepartments,
  listAllDepartments: listAllDepartments,
  getDepartmentData: getDepartmentData,
  updateDepartment: updateDepartment,
  createDepartment: createDepartment,
};

function listDepartments(req, res) {
  let pageNumber = req.query.page || 1;
  pageNumber = pageNumber > 0 ? pageNumber : 1;

  const limit = 20;
  const offset = limit * (pageNumber - 1);

  const departmentData = { total: 0, items: {} };
  departmentModel.findAll().then((allDepartments) => {
    departmentData.total = allDepartments.length;
  });
  departmentModel.findAll({
    offset,
    limit,
    order: [
      ['id', 'ASC']],
    include: { model: employeeModel, required: false, attributes: [['name', 'manager_name']] },
  }).then((data) => {
    departmentData.items = data;
    res.status(200).json(departmentData);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function listAllDepartments(req, res) {
  departmentModel.findAll().then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function getDepartmentData(req, res) {
  const departmentId = req.params.id;
  departmentModel.findOne({
    where: { id: departmentId },
  }).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function updateDepartment(req, res) {
  const updateDepartmentValues = {
    name: req.body.name,
    description: req.body.description,
    office_number: req.body.office_number,
    manager_id: req.body.manager_id,
  };
  departmentModel.update(updateDepartmentValues, { where: { id: req.body.department_id } })
    .then((result) => {
      res.status(200).json({ status: 'success' });
    }).catch((err) => {
      res.status(500).send(err.stack);
    });
}

function createDepartment(req, res) {
  const insertDepartmentValues = {
    name: req.body.name,
    description: req.body.description,
    office_number: req.body.office_number,
    manager_id: req.body.manager_id || 1,
    date_created: Sequelize.fn('NOW'),
    date_updated: Sequelize.fn('NOW'),
  };
  departmentModel.create(insertDepartmentValues)
    .then((result) => {
      res.status(200).json({ status: 'success' });
    }).catch((err) => {
      res.status(500).send(err.stack);
    });
}
