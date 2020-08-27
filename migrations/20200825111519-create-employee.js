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
        "`job_title` varchar(60) COLLATE utf8_unicode_ci NOT NULL DEFAULT ''," +
        "`country` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`phone` varchar(60) COLLATE utf8_unicode_ci NOT NULL," +
        "`picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL," +
        "`department_id` INT(11) NOT NULL DEFAULT 0," +
        "`dob` DATE NULL DEFAULT NULL," +
        "`is_manager` INT(11) NOT NULL DEFAULT 0," +
        "`date_created` timestamp NULL DEFAULT NULL," +
        "`date_updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP," +
        "PRIMARY KEY (`id`)" +
      ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
      ),
      await queryInterface.sequelize.query(
        "INSERT INTO `employee` (`name`, `email`, `gender`, `job_title`, `country`, `phone`, `picture`, `department_id`, `dob`, `is_manager`, `date_created`, `date_updated`) VALUES " +
        "('Juliane Meurer', 'juliane.meurer@example.com', 'female', 'Office Assistant', 'Germany', '0554-5953158', 'https://randomuser.me/api/portraits/women/84.jpg', 19, '1985-02-25', 1, NOW(), NOW())," +
        "('Brandon Schmidt', 'brandon.schmidt@example.com', 'male', 'Administrative Assistant', 'Australia', '02-4125-8209', 'https://randomuser.me/api/portraits/men/85.jpg', 14, '1959-11-23', 0, NOW(), NOW())," +
        "('Eugenia Soler', 'eugenia.soler@example.com', 'female', 'Administrative Assistant', 'Spain', '906-948-936', 'https://randomuser.me/api/portraits/women/80.jpg', 20, '1965-05-10', 1, NOW(), NOW())," +
        "('Jordan Garcia', 'jordan.garcia@example.com', 'male', 'Administrative Assistant', 'France', '05-81-31-94-59', 'https://randomuser.me/api/portraits/men/68.jpg', 17, '1979-01-15', 0, NOW(), NOW())," +
        "('Batur Aymen', 'batur.oymen@example.com', 'male', 'Administrative Assistant', 'Turkey', '(405)-816-1769', 'https://randomuser.me/api/portraits/men/50.jpg', 10, '1957-10-28', 0, NOW(), NOW())," +
        "('Siren Klyve', 'siren.klyve@example.com', 'female', 'Software Engineer', 'Norway', '30886040', 'https://randomuser.me/api/portraits/women/77.jpg', 13, '1982-04-28', 0, NOW(), NOW())," +
        "('Emilia Pulkkinen', 'emilia.pulkkinen@example.com', 'female', 'Software Engineer', 'Finland', '05-509-681', 'https://randomuser.me/api/portraits/women/51.jpg', 18, '1972-03-30', 1, NOW(), NOW())," +
        "('Christoffer Olsen', 'christoffer.olsen@example.com', 'male', 'Software Engineer', 'Denmark', '90838502', 'https://randomuser.me/api/portraits/men/52.jpg', 22, '1982-05-09', 0, NOW(), NOW())," +
        "('Ana Senger', 'ana.senger@example.com', 'female', 'Software Engineer', 'Germany', '0998-1974751', 'https://randomuser.me/api/portraits/women/61.jpg', 7, '1995-02-24', 0, NOW(), NOW())," +
        "('Jimmy Sams', 'armyn.njty@example.com', 'male', 'Software Engineer', 'Iran', '041-33548986', 'https://randomuser.me/api/portraits/men/30.jpg', 13, '1991-08-20', 0, NOW(), NOW())," +
        "('Jimmy Snyder', 'jimmy.snyder@example.com', 'male', 'Software Engineer', 'United States', '(481)-957-2305', 'https://randomuser.me/api/portraits/men/46.jpg', 9, '1950-05-23', 0, NOW(), NOW())," +
        "('Ida Gray', 'ida.gray@example.com', 'female', 'Software Engineer', 'Australia', '05-4296-6935', 'https://randomuser.me/api/portraits/women/33.jpg', 7, '1960-05-16', 0, NOW(), NOW())," +
        "('Pirmin Rettig', 'pirmin.rettig@example.com', 'male', 'Software Engineer', 'Germany', '0614-6485734', 'https://randomuser.me/api/portraits/men/82.jpg', 24, '1952-09-01', 0, NOW(), NOW())," +
        "('Isabelle Mendoza', 'isabelle.mendoza@example.com', 'female', 'Software Engineer', 'United Kingdom', '01653 52370', 'https://randomuser.me/api/portraits/women/31.jpg', 1, '1996-01-18', 0, NOW(), NOW())," +
        "('Soren Dubois', 'soren.dubois@example.com', 'male', 'Software Engineer', 'France', '04-16-26-38-65', 'https://randomuser.me/api/portraits/men/75.jpg', 12, '1992-03-01', 0, NOW(), NOW())," +
        "('Oya Akal', 'oya.akal@example.com', 'female', 'Software Engineer', 'Turkey', '(967)-574-7679', 'https://randomuser.me/api/portraits/women/38.jpg', 6, '1978-01-07', 0, NOW(), NOW())," +
        "('Amber Howell', 'amber.howell@example.com', 'female', 'Software Engineer', 'United Kingdom', '015242 16126', 'https://randomuser.me/api/portraits/women/0.jpg', 6, '1968-08-22', 0, NOW(), NOW())," +
        "('Saif Oldenburger', 'saif.oldenburger@example.com', 'male', 'Executive Assistant', 'Netherlands', '(553)-448-1019', 'https://randomuser.me/api/portraits/men/84.jpg', 16, '1991-03-13', 0, NOW(), NOW())," +
        "('Lidia Ramos', 'lidia.ramos@example.com', 'female', 'Executive Assistant', 'Spain', '937-928-551', 'https://randomuser.me/api/portraits/women/85.jpg', 6, '1962-04-16', 0, NOW(), NOW())," +
        "('Celia Dupuis', 'celia.dupuis@example.com', 'female', 'Executive Assistant', 'France', '04-42-79-30-49', 'https://randomuser.me/api/portraits/women/31.jpg', 12, '1989-07-17', 0, NOW(), NOW())," +
        "('Hans-Gerd Schenk', 'hans-gerd.schenk@example.com', 'male', 'Executive Assistant', 'Germany', '0327-5085493', 'https://randomuser.me/api/portraits/men/68.jpg', 10, '1970-05-22', 0, NOW(), NOW())," +
        "('Francisco Serrano', 'francisco.serrano@example.com', 'male', 'Executive Assistant', 'Spain', '971-161-560', 'https://randomuser.me/api/portraits/men/0.jpg', 24, '1970-05-31', 0, NOW(), NOW())," +
        "('Sam Say', 'tyn.khmrw@example.com', 'female', 'Executive Assistant', 'Iran', '006-02165574', 'https://randomuser.me/api/portraits/women/9.jpg', 10, '1955-08-01', 0, NOW(), NOW())," +
        "('Gema Duran', 'gema.duran@example.com', 'female', 'Executive Assistant', 'Spain', '937-855-624', 'https://randomuser.me/api/portraits/women/27.jpg', 24, '1967-09-24', 0, NOW(), NOW())," +
        "('Elijah Lee', 'elijah.lee@example.com', 'male', 'Software Engineer', 'United Kingdom', '017683 70471', 'https://randomuser.me/api/portraits/men/91.jpg', 12, '1961-03-20', 1, NOW(), NOW())," +
        "('Johnny Perl', 'ayse.sepetci@example.com', 'female', 'Software Engineer', 'Turkey', '(750)-623-3148', 'https://randomuser.me/api/portraits/women/20.jpg', 6, '1964-11-12', 0, NOW(), NOW())," +
        "('Maureen Gray', 'maureen.gray@example.com', 'female', 'Software Engineer', 'United States', '(075)-108-3924', 'https://randomuser.me/api/portraits/women/10.jpg', 12, '1967-07-04', 0, NOW(), NOW())," +
        "('Gaaldine Giraud', 'geraldine.giraud@example.com', 'female', 'Software Engineer', 'Switzerland', '079 700 83 49', 'https://randomuser.me/api/portraits/women/8.jpg', 1, '1963-08-06', 0, NOW(), NOW())," +
        "('William Turner', 'william.turner@example.com', 'male', 'Software Engineer', 'New Zealand', '(052)-899-4065', 'https://randomuser.me/api/portraits/men/37.jpg', 23, '1955-04-05', 0, NOW(), NOW())," +
        "('Ritthy Lawson', 'ritthy.lawson@example.com', 'male', 'Software Engineer', 'United States', '(254)-595-4663', 'https://randomuser.me/api/portraits/men/51.jpg', 15, '1957-04-12', 0, NOW(), NOW())," +
        "('Lavrans Kyvik', 'lavrans.kyvik@example.com', 'male', 'Software Engineer', 'Norway', '75630804', 'https://randomuser.me/api/portraits/men/58.jpg', 21, '1967-03-15', 0, NOW(), NOW())," +
        "('Rocio Pascual', 'rocio.pascual@example.com', 'female', 'Software Engineer', 'Spain', '987-190-347', 'https://randomuser.me/api/portraits/women/10.jpg', 19, '1977-08-31', 0, NOW(), NOW())," +
        "('Hans-Wolfgang Welsch', 'hans-wolfgang.welsch@example.com', 'male', 'Software Engineer', 'Germany', '0244-2851996', 'https://randomuser.me/api/portraits/men/84.jpg', 7, '1984-10-10', 0, NOW(), NOW())," +
        "('Lillian Lee', 'lillian.lee@example.com', 'female', 'Software Engineer', 'Ireland', '071-489-7126', 'https://randomuser.me/api/portraits/women/77.jpg', 9, '1978-10-23', 0, NOW(), NOW())," +
        "('Nela Bergan', 'nela.bergan@example.com', 'female', 'Software Engineer', 'Norway', '69730909', 'https://randomuser.me/api/portraits/women/8.jpg', 5, '1974-03-25', 0, NOW(), NOW())," +
        "('Tanja Werner', 'tanja.werner@example.com', 'female', 'Software Engineer', 'Germany', '0919-8805345', 'https://randomuser.me/api/portraits/women/7.jpg', 1, '1954-12-05', 0, NOW(), NOW())," +
        "('Cathy Doyle', 'cathy.doyle@example.com', 'female', 'Software Engineer', 'Ireland', '041-185-7189', 'https://randomuser.me/api/portraits/women/88.jpg', 14, '1998-01-21', 0, NOW(), NOW())," +
        "('Joelle Van Doesburg', 'joelle.vandoesburg@example.com', 'female', 'Software Engineer', 'Netherlands', '(694)-725-1391', 'https://randomuser.me/api/portraits/women/30.jpg', 10, '1978-03-05', 0, NOW(), NOW())," +
        "('Audrey Brown', 'audrey.brown@example.com', 'female', 'Marketing Manager', 'United States', '(312)-815-9651', 'https://randomuser.me/api/portraits/women/79.jpg', 8, '1954-01-23', 0, NOW(), NOW())," +
        "('Fatma Huseb', 'fatma.husebo@example.com', 'female', 'Marketing Manager', 'Norway', '25319609', 'https://randomuser.me/api/portraits/women/33.jpg', 7, '1965-01-19', 0, NOW(), NOW())," +
        "('Taicio da Rocha', 'tacio.darocha@example.com', 'male', 'Marketing Manager', 'Brazil', '(43) 1155-5437', 'https://randomuser.me/api/portraits/men/25.jpg', 8, '1986-09-14', 0, NOW(), NOW())," +
        "('Anthonius Hol', 'anthonius.hol@example.com', 'male', 'Marketing Manager', 'Netherlands', '(150)-249-4078', 'https://randomuser.me/api/portraits/men/66.jpg', 3, '1976-11-08', 0, NOW(), NOW())," +
        "('Nathan Da Silva', 'nathanael.dasilva@example.com', 'male', 'Marketing Manager', 'France', '04-92-85-69-40', 'https://randomuser.me/api/portraits/men/78.jpg', 12, '1978-07-07', 0, NOW(), NOW())," +
        "('Elionore Vincent', 'eleonore.vincent@example.com', 'female', 'Marketing Manager', 'France', '04-49-36-40-72', 'https://randomuser.me/api/portraits/women/20.jpg', 21, '1991-05-31', 0, NOW(), NOW())," +
        "('Paulette Roussel', 'paulette.roussel@example.com', 'female', 'Marketing Manager', 'Switzerland', '077 889 72 36', 'https://randomuser.me/api/portraits/women/42.jpg', 3, '1956-01-24', 0, NOW(), NOW())," +
        "('Ella Hovin', 'ella.hovin@example.com', 'female', 'Software Engineer', 'Norway', '28775931', 'https://randomuser.me/api/portraits/women/24.jpg', 13, '1996-09-19', 0, NOW(), NOW())," +
        "('Gonca Adal', 'gonca.adal@example.com', 'female', 'Software Engineer', 'Turkey', '(328)-078-4080', 'https://randomuser.me/api/portraits/women/89.jpg', 8, '1994-06-20', 0, NOW(), NOW())," +
        "('Mia Singh', 'mia.singh@example.com', 'female', 'Software Engineer', 'Canada', '238-848-3102', 'https://randomuser.me/api/portraits/women/42.jpg', 5, '1958-09-07', 0, NOW(), NOW())," +
        "('Birgitta Rautenberg', 'birgitta.rautenberg@example.com', 'female', 'Software Engineer', 'Germany', '0691-9583231', 'https://randomuser.me/api/portraits/women/25.jpg', 3, '1994-04-25', 0, NOW(), NOW())," +
        "('Fernando Myers', 'fernando.myers@example.com', 'male', 'Software Engineer', 'United Kingdom', '015242 78598', 'https://randomuser.me/api/portraits/men/38.jpg', 23, '1997-07-12', 0, NOW(), NOW())," +
        "('Gal Caron', 'gael.caron@example.com', 'male', 'Software Engineer', 'France', '04-75-44-29-47', 'https://randomuser.me/api/portraits/men/72.jpg', 1, '1989-10-10', 0, NOW(), NOW())," +
        "('Savio Moreira', 'savio.moreira@example.com', 'male', 'Software Engineer', 'Brazil', '(72) 9146-6821', 'https://randomuser.me/api/portraits/men/92.jpg', 2, '1979-02-16', 0, NOW(), NOW())," +
        "('Jackson Evans', 'jackson.evans@example.com', 'male', 'Customer Service Representative', 'New Zealand', '(612)-082-2689', 'https://randomuser.me/api/portraits/men/27.jpg', 7, '1951-03-27', 0, NOW(), NOW())," +
        "('Isabelle Carroll', 'isabelle.carroll@example.com', 'female', 'Customer Service Representative', 'United Kingdom', '016974 97451', 'https://randomuser.me/api/portraits/women/8.jpg', 1, '1954-10-17', 0, NOW(), NOW())," +
        "('Barry Castro', 'barry.castro@example.com', 'male', 'Customer Service Representative', 'Australia', '08-6810-3039', 'https://randomuser.me/api/portraits/men/41.jpg', 2, '1952-01-15', 0, NOW(), NOW())," +
        "('Ella Hiltunen', 'ella.hiltunen@example.com', 'female', 'Customer Service Representative', 'Finland', '03-695-461', 'https://randomuser.me/api/portraits/women/4.jpg', 7, '1973-09-29', 0, NOW(), NOW())," +
        "('Gabrielle Hatta', 'gabrielle.haetta@example.com', 'female', 'Customer Service Representative', 'Norway', '62949134', 'https://randomuser.me/api/portraits/women/60.jpg', 12, '1986-01-09', 0, NOW(), NOW())," +
        "('Lya Joly', 'lya.joly@example.com', 'female', 'Customer Service Representative', 'France', '03-50-70-20-08', 'https://randomuser.me/api/portraits/women/12.jpg', 14, '1997-11-27', 0, NOW(), NOW())," +
        "('Molly Hoffman', 'molly.hoffman@example.com', 'female', 'Customer Service Representative', 'United Kingdom', '0131 321 6044', 'https://randomuser.me/api/portraits/women/5.jpg', 21, '1963-03-08', 0, NOW(), NOW())," +
        "('Dustin Ross', 'dustin.ross@example.com', 'male', 'Nurse Practitioner', 'United Kingdom', '016973 10493', 'https://randomuser.me/api/portraits/men/77.jpg', 12, '1945-02-20', 0, NOW(), NOW())," +
        "('Tracy Byrd', 'tracy.byrd@example.com', 'female', 'Nurse Practitioner', 'Ireland', '061-692-6179', 'https://randomuser.me/api/portraits/women/52.jpg', 12, '1975-05-17', 0, NOW(), NOW())," +
        "('Lior Mallens', 'lior.mallens@example.com', 'male', 'Nurse Practitioner', 'Netherlands', '(095)-169-1288', 'https://randomuser.me/api/portraits/men/83.jpg', 3, '1954-07-01', 0, NOW(), NOW())," +
        "('Carla Dunn', 'carla.dunn@example.com', 'female', 'Nurse Practitioner', 'United States', '(188)-058-7196', 'https://randomuser.me/api/portraits/women/70.jpg', 6, '1988-12-19', 0, NOW(), NOW())," +
        "('Fausto Le Gall', 'fausto.legall@example.com', 'male', 'Nurse Practitioner', 'Switzerland', '075 998 63 48', 'https://randomuser.me/api/portraits/men/16.jpg', 7, '1954-12-03', 0, NOW(), NOW())," +
        "('Nolhan Rodriguez', 'nolhan.rodriguez@example.com', 'male', 'Nurse Practitioner', 'France', '02-07-92-76-22', 'https://randomuser.me/api/portraits/men/16.jpg', 21, '1949-09-26', 0, NOW(), NOW())," +
        "('Nolhan Trump', 'mhmdmhdy.mhmdkhn@example.com', 'male', 'Nurse Practitioner', 'Iran', '083-23752865', 'https://randomuser.me/api/portraits/men/39.jpg', 8, '1980-09-08', 0, NOW(), NOW())," +
        "('Claudia Monteiro', 'claudia.monteiro@example.com', 'female', 'Sales Manager', 'Brazil', '(16) 7133-0609', 'https://randomuser.me/api/portraits/women/74.jpg', 6, '1970-11-28', 0, NOW(), NOW())," +
        "('Odile Morel', 'odile.morel@example.com', 'female', 'Sales Manager', 'Switzerland', '078 058 16 18', 'https://randomuser.me/api/portraits/women/89.jpg', 13, '1996-09-01', 0, NOW(), NOW())," +
        "('Isobel Gutierrez', 'isobel.gutierrez@example.com', 'female', 'Sales Manager', 'Australia', '00-8672-8178', 'https://randomuser.me/api/portraits/women/75.jpg', 20, '1985-07-10', 0, NOW(), NOW())," +
        "('Hector Roussel', 'hector.roussel@example.com', 'male', 'Sales Manager', 'France', '03-73-94-30-60', 'https://randomuser.me/api/portraits/men/50.jpg', 14, '1954-05-23', 0, NOW(), NOW())," +
        "('Oscar Hermann', 'oscar.hermann@example.com', 'male', 'Sales Manager', 'Norway', '65032034', 'https://randomuser.me/api/portraits/men/89.jpg', 1, '1949-05-04', 0, NOW(), NOW())," +
        "('Vicky Mccoy', 'vicky.mccoy@example.com', 'female', 'Sales Manager', 'United Kingdom', '017684 74436', 'https://randomuser.me/api/portraits/women/96.jpg', 8, '1944-11-09', 0, NOW(), NOW())," +
        "('Anelise Aragazo', 'anelise.aragao@example.com', 'female', 'Software Engineer', 'Brazil', '(51) 4180-1344', 'https://randomuser.me/api/portraits/women/43.jpg', 11, '1950-10-31', 0, NOW(), NOW())," +
        "('Allan Robertson', 'allan.robertson@example.com', 'male', 'Software Engineer', 'Australia', '00-9782-3684', 'https://randomuser.me/api/portraits/men/62.jpg', 8, '1947-02-05', 0, NOW(), NOW())," +
        "('Per Figenschau', 'per.figenschau@example.com', 'male', 'Software Engineer', 'Norway', '27932770', 'https://randomuser.me/api/portraits/men/12.jpg', 9, '1996-08-09', 0, NOW(), NOW())," +
        "('Mike Tyson', 'mhdys.aalyzdh@example.com', 'female', 'Data Entry Clerk', 'Iran', '061-78010400', 'https://randomuser.me/api/portraits/women/84.jpg', 18, '1983-02-03', 0, NOW(), NOW())," +
        "('Mille Kristensen', 'mille.kristensen@example.com', 'male', 'Data Entry Clerk', 'Denmark', '28433523', 'https://randomuser.me/api/portraits/men/27.jpg', 13, '1956-07-22', 0, NOW(), NOW())," +
        "('Rigo Fromme', 'rigo.fromme@example.com', 'male', 'Data Entry Clerk', 'Germany', '0554-8063419', 'https://randomuser.me/api/portraits/men/33.jpg', 20, '1954-11-13', 0, NOW(), NOW())," +
        "('Hilda Till', 'hilda.till@example.com', 'female', 'Data Entry Clerk', 'Germany', '0232-3776866', 'https://randomuser.me/api/portraits/women/93.jpg', 7, '1967-10-22', 0, NOW(), NOW())," +
        "('Javier Mathieu', 'javier.mathieu@example.com', 'male', 'Data Entry Clerk', 'Switzerland', '075 035 78 69', 'https://randomuser.me/api/portraits/men/18.jpg', 8, '1964-07-19', 0, NOW(), NOW())," +
        "('Alexander Andersen', 'alexander.andersen@example.com', 'male', 'Data Entry Clerk', 'Denmark', '06436204', 'https://randomuser.me/api/portraits/men/11.jpg', 23, '1958-02-17', 0, NOW(), NOW())," +
        "('Maxwell Green', 'maxwell.green@example.com', 'male', 'Data Entry Clerk', 'United Kingdom', '01010 48798', 'https://randomuser.me/api/portraits/men/64.jpg', 22, '1964-11-08', 0, NOW(), NOW())," +
        "('Sean Hveding', 'sean.hveding@example.com', 'male', 'Data Entry Clerk', 'Norway', '85279172', 'https://randomuser.me/api/portraits/men/66.jpg', 17, '1979-01-26', 0, NOW(), NOW())," +
        "('Hunter Novak', 'hunter.novak@example.com', 'male', 'Data Entry Clerk', 'Canada', '503-365-3047', 'https://randomuser.me/api/portraits/men/30.jpg', 11, '1947-08-08', 0, NOW(), NOW())," +
        "('Kristin Johnston', 'kristin.johnston@example.com', 'female', 'Data Entry Clerk', 'Ireland', '051-652-5105', 'https://randomuser.me/api/portraits/women/62.jpg', 22, '1950-06-12', 0, NOW(), NOW())," +
        "('Kristian Duff', 'nyysh.hmdy@example.com', 'female', 'Data Entry Clerk', 'Iran', '020-33726963', 'https://randomuser.me/api/portraits/women/56.jpg', 8, '1979-02-17', 0, NOW(), NOW())," +
        "('Aureliza da Mata', 'aureliza.damata@example.com', 'female', 'Data Entry Clerk', 'Brazil', '(39) 7094-0966', 'https://randomuser.me/api/portraits/women/20.jpg', 18, '1983-06-05', 0, NOW(), NOW())," +
        "('Eeli Tanner', 'eeli.tanner@example.com', 'male', 'Data Entry Clerk', 'Finland', '06-132-402', 'https://randomuser.me/api/portraits/men/40.jpg', 23, '1986-11-02', 0, NOW(), NOW())," +
        "('Layla Smith', 'layla.smith@example.com', 'female', 'Data Entry Clerk', 'New Zealand', '(760)-278-3172', 'https://randomuser.me/api/portraits/women/12.jpg', 6, '1979-08-19', 0, NOW(), NOW())," +
        "('Alexandro Silveira', 'alexandro.silveira@example.com', 'male', 'Data Entry Clerk', 'Brazil', '(94) 0563-4025', 'https://randomuser.me/api/portraits/men/33.jpg', 14, '1997-02-27', 0, NOW(), NOW())," +
        "('Sigmund Knoth', 'sigmund.knoth@example.com', 'male', 'Data Entry Clerk', 'Germany', '0881-0710059', 'https://randomuser.me/api/portraits/men/51.jpg', 5, '1991-11-15', 0, NOW(), NOW())," +
        "('Amelie Nguyen', 'amelie.nguyen@example.com', 'female', 'Data Entry Clerk', 'Switzerland', '075 521 56 58', 'https://randomuser.me/api/portraits/women/36.jpg', 7, '1968-03-13', 0, NOW(), NOW())," +
        "('Eddo Moerenhout', 'eddo.moerenhout@example.com', 'male', 'Data Entry Clerk', 'Netherlands', '(483)-803-2137', 'https://randomuser.me/api/portraits/men/4.jpg', 22, '1953-10-17', 0, NOW(), NOW())," +
        "('Miron Kyle', 'dyn.slry@example.com', 'female', 'Data Entry Clerk', 'Iran', '055-01299619', 'https://randomuser.me/api/portraits/women/37.jpg', 5, '1981-01-19', 0, NOW(), NOW())," +
        "('Miron Hilverda', 'miron.hilverda@example.com', 'female', 'Data Entry Clerk', 'Netherlands', '(402)-409-5051', 'https://randomuser.me/api/portraits/women/27.jpg', 2, '1980-05-08', 0, NOW(), NOW())," +
        "('Thea Kumar', 'thea.kumar@example.com', 'female', 'Office Assistant', 'New Zealand', '(187)-725-2401', 'https://randomuser.me/api/portraits/women/45.jpg', 4, '1992-07-27', 0, NOW(), NOW())," +
        "('Carol Mccoy', 'carol.mccoy@example.com', 'female', 'Office Assistant', 'Ireland', '051-018-6220', 'https://randomuser.me/api/portraits/women/45.jpg', 15, '1959-06-21', 0, NOW(), NOW())," +
        "('Davut Baykam', 'davut.baykam@example.com', 'male', 'Office Assistant', 'Turkey', '(880)-653-0601', 'https://randomuser.me/api/portraits/men/46.jpg', 23, '1985-07-30', 0, NOW(), NOW())," +
        "('Amanda Dunne', 'amanda.dunne@example.com', 'female', 'Office Assistant', 'Ireland', '011-376-2480', 'https://randomuser.me/api/portraits/women/61.jpg', 14, '1950-11-29', 0, NOW(), NOW())," +
        "('Tyrone Webb', 'tyrone.webb@example.com', 'male', 'Office Assistant', 'Australia', '02-7888-4267', 'https://randomuser.me/api/portraits/men/99.jpg', 24, '1971-03-19', 0, NOW(), NOW());"
        ),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employee');
  }
};