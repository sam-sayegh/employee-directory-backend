'use strict';

module.exports = (sequelize, Sequelize) => {
  const employee = sequelize.define("department", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING
    },
    department_id: {
      type: Sequelize.INTEGER
    },
    dob: {
      type: Sequelize.DATE
    },
    date_created: {
      type: Sequelize.TIME
    },
    date_updated: {
      type: Sequelize.TIME
    }
  },{
    tableName: 'employee',
    timestamps: false,
    name: {
      singular: 'employee',
      plural: 'employee',
    }
  });

  return employee;
};