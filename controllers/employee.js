/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable strict */
/* eslint-disable no-use-before-define */

'use strict';

const Sequelize = require('sequelize');
const db = require('../models');

const { employeeModel } = db;
const { departmentModel } = db;

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
  employeeModel.findAll({ where: { is_manager: 1 } }).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function listEmployees(req, res) {
  const whereCondition = {};
  if (req.query.search_term && req.query.search_term !== '') {
    Object.assign(whereCondition, { name: { [SequelizeOp.like]: `%${req.query.search_term}%` } });
  }
  if (req.query.job_title && req.query.job_title !== '') {
    Object.assign(whereCondition, { job_title: req.query.job_title });
  }
  if (req.query.department_id && req.query.department_id) {
    Object.assign(whereCondition, { department_id: req.query.department_id });
  }
  let pageNumber = req.query.page || 1;
  pageNumber = pageNumber > 0 ? pageNumber : 1;

  const limit = 20;
  const offset = limit * (pageNumber - 1);

  const employeeData = { total: 0, items: {} };
  employeeModel.findAll({ where: whereCondition, attributes: ['id'] }).then((allEmployees) => {
    employeeData.total = allEmployees.length;
  });
  employeeModel.findAll({
    where: whereCondition,
    offset,
    limit,
    order: [
      ['name', 'ASC']],
    include: { model: departmentModel, required: false, attributes: [['name', 'department_name']] },
  }).then((data) => {
    employeeData.items = data;
    res.status(200).json(employeeData);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function getEmployeeData(req, res) {
  const employeeId = req.params.id;
  employeeModel.findOne({
    where: { id: employeeId },
  }).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function updateEmployee(req, res) {
  const updateEmployeeValues = {
    name: req.body.name,
    country: req.body.country,
    job_title: req.body.job_title,
    phone: req.body.phone,
    email: req.body.email,
    department_id: req.body.department_id,
  };
  employeeModel.update(updateEmployeeValues, { where: { id: req.body.employee_id } })
    .then((result) => {
      res.status(200).json({ status: 'success' });
    }).catch((err) => {
      res.status(500).send(err.stack);
    });
}

function createEmployee(req, res) {
  const insertEmployeeValues = {
    name: req.body.name,
    country: req.body.country,
    job_title: req.body.job_title,
    phone: req.body.phone,
    email: req.body.email,
    gender: '',
    department_id: req.body.department_id,
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
    date_created: Sequelize.fn('NOW'),
    date_updated: Sequelize.fn('NOW'),
  };
  employeeModel.create(insertEmployeeValues)
    .then((result) => {
      const newEmployeeId = result.dataValues.id || 0;
      res.status(200).json({ status: 'success', newEmployeeId: newEmployeeId });
    }).catch((err) => {
      res.status(500).send(err.stack);
    });
}

function deleteEmployee(req, res) {
  const employeeId = req.params.id;
  employeeModel.destroy({
    where: { id: employeeId },
  }).then((data) => {
    res.status(200).json({ status: 'success' });
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}
