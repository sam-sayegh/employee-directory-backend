'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize.query("DROP TABLE IF EXISTS `employee`;"),
      await queryInterface.sequelize.query(
        "CREATE TABLE IF NOT EXISTS `employee` (" +
        "`id` int(11) NOT NULL AUTO_INCREMENT," +
        "`name` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`email` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`gender` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`country` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`phone` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`picture` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`department_id` INT(11) NOT NULL DEFAULT 0," +
        "`dob` DATE NULL DEFAULT NULL," +
        "`date_created` timestamp NULL DEFAULT NULL," +
        "`date_updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP," +
        "PRIMARY KEY (`id`)" +
      ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
      ),
      await queryInterface.sequelize.query(
        "INSERT INTO `employee` (`name`, `email`, `gender`, `country`, `phone`, `picture`, `department_id`, `dob`, `date_created`, `date_updated`) VALUES " +
        "('Matilde Theodorsen', 'matilde.theodorsen@example.com', 'female', 'Norway', '52419029', 'https://randomuser.me/api/portraits/women/2.jpg', 3, '1958-08-31', NOW(), NOW())," +
        "('Joshua Trana', 'joshua.trana@example.com', 'male', 'Norway', '30040890', 'https://randomuser.me/api/portraits/men/19.jpg', 3, '1965-02-17', NOW(), NOW())," +
        "('Maximino Nunes', 'maximino.nunes@example.com', 'male', 'Brazil', '(08) 4446-9324', 'https://randomuser.me/api/portraits/men/1.jpg', 2, '1969-10-20', NOW(), NOW())," +
        "('Marinde Deijkers', 'marinde.deijkers@example.com', 'female', 'Netherlands', '(324)-720-9896', 'https://randomuser.me/api/portraits/women/37.jpg', 1, '1952-06-02', NOW(), NOW())," +
        "('Eliana Menard', 'elena.menard@example.com', 'female', 'France', '02-48-35-54-92', 'https://randomuser.me/api/portraits/women/7.jpg', 1, '1971-02-13', NOW(), NOW());"
        ),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employee');
  }
};