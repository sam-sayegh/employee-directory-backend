'use strict';

module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    authentication_key: {
      type: Sequelize.TEXT
    },
    date_created: {
      type: Sequelize.TIME
    },
    date_updated: {
      type: Sequelize.TIME
    }
  },{
    tableName: 'user',
    timestamps: false,
    name: {
      singular: 'user',
      plural: 'user',
    }
  });

  return user;
};