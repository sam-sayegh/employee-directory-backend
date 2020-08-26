'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize.query("DROP TABLE IF EXISTS `department`;"),
      await queryInterface.sequelize.query(
        "CREATE TABLE IF NOT EXISTS `department` (" +
        "`id` int(11) NOT NULL AUTO_INCREMENT," +
        "`name` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`description` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`office_number` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`manager_id` INT(11)," +
        "`date_created` timestamp NULL DEFAULT NULL," +
        "`date_updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP," +
        "PRIMARY KEY (`id`)" +
      ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
      ),
      await queryInterface.sequelize.query(
        "INSERT INTO `department` (name, description, office_number, manager_id, date_created, date_updated)" +
        "VALUES " +
        "('HR', 'Human Resources', '123321212', 1, NOW(), NOW()),"+
        "('Sales', 'Sales Force', '32434234', 3, NOW(), NOW()),"+
        "('Technology', 'R&D Department', '2344324432', 7, NOW(), NOW()),"+
        "('HR 1', 'Human Resources 1', '123321212', 1, NOW(), NOW()),"+
        "('Sales 1', 'Sales Force 1', '32434234', 3, NOW(), NOW()),"+
        "('Technology 1', 'R&D Department 1', '2344324432', 7, NOW(), NOW()),"+
        "('HR 2', 'Human Resources 2', '123321212', 1, NOW(), NOW()),"+
        "('Sales 2', 'Sales Force 2', '32434234', 3, NOW(), NOW()),"+
        "('Technology 2', 'R&D Department 2', '2344324432', 7, NOW(), NOW()),"+
        "('HR 3', 'Human Resources 3', '123321212', 1, NOW(), NOW()),"+
        "('Sales 3', 'Sales Force 3', '32434234', 3, NOW(), NOW()),"+
        "('Technology 3', 'R&D Department 3', '2344324432', 7, NOW(), NOW()),"+
        "('HR 4', 'Human Resources 4', '123321212', 1, NOW(), NOW()),"+
        "('Sales 4', 'Sales Force 4', '32434234', 3, NOW(), NOW()),"+
        "('Technology 4', 'R&D Department 4', '2344324432', 7, NOW(), NOW()),"+
        "('HR 5', 'Human Resources 5', '123321212', 1, NOW(), NOW()),"+
        "('Sales 5', 'Sales Force 5', '32434234', 3, NOW(), NOW()),"+
        "('Technology 5', 'R&D Department 5', '2344324432', 7, NOW(), NOW()),"+
        "('HR 6', 'Human Resources 6', '123321212', 1, NOW(), NOW()),"+
        "('Sales 6', 'Sales Force 6', '32434234', 3, NOW(), NOW()),"+
        "('Technology 6', 'R&D Department 6', '2344324432', 7, NOW(), NOW()),"+
        "('HR 7', 'Human Resources 7', '123321212', 1, NOW(), NOW()),"+
        "('Sales 7', 'Sales Force 7', '32434234', 3, NOW(), NOW()),"+
        "('Technology 7', 'R&D Department 7', '2344324432', 7, NOW(), NOW());"
        ),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('department');
  }
};