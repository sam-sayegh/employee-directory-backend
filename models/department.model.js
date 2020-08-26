'use strict';

module.exports = (sequelize, Sequelize) => {
  const department = sequelize.define("department", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    office_number: {
      type: Sequelize.STRING
    },
    manager_id: {
      type: Sequelize.INTEGER
    },
    date_created: {
      type: Sequelize.TIME
    },
    date_updated: {
      type: Sequelize.TIME
    }
  }, {
    tableName: 'department',
    timestamps: false,
    name: {
      singular: 'department',
      plural: 'department',
    }
  });

  let employeeModel = require("./employee.model.js")(sequelize, Sequelize);
  employeeModel.hasOne(department, { foreignKey: 'id' });
  department.belongsTo(employeeModel, { foreignKey: 'manager_id' });
  return department;
};