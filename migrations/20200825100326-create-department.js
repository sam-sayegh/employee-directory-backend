'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize.query("DROP TABLE IF EXISTS `department`;"),
      await queryInterface.sequelize.query(
        "CREATE TABLE IF NOT EXISTS `department` (" +
        "`id` int(11) NOT NULL AUTO_INCREMENT," +
        "`name` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`manager_id` INT(11)," +
        "`date_created` timestamp NULL DEFAULT NULL," +
        "`date_updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP," +
        "PRIMARY KEY (`id`)" +
      ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
      ),
      await queryInterface.sequelize.query(
        "INSERT INTO `department` (name, manager_id, date_created, date_updated)" +
        "VALUES " +
        "('HR', 1, NOW(), NOW()),"+
        "('Sales', 3, NOW(), NOW()),"+
        "('Technology', 7, NOW(), NOW())"
        ),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('department');
  }
};