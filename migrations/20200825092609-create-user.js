'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize.query("DROP TABLE IF EXISTS `user`;"),
      await queryInterface.sequelize.query(
        "CREATE TABLE IF NOT EXISTS `user` (" +
        "`id` int(11) NOT NULL AUTO_INCREMENT," +
        "`name` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`email` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`password` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`authentication_key` text COLLATE utf8_unicode_ci NOT NULL," +
        "`date_created` timestamp NULL DEFAULT NULL," +
        "`date_updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP," +
        "PRIMARY KEY (`id`)" +
      ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
      ),
      await queryInterface.sequelize.query(
        "INSERT INTO `user` (name, email, password, authentication_key, date_created, date_updated)" +
        "VALUES " +
        "('admin', 'admin@admin.com', MD5('Test@123'), '', NOW(), NOW())"
        ),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};