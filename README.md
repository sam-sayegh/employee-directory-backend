# employee-directory-backend
employee-directory-backend

# To install and run the application
1. Run git clone https://github.com/samer-alsayegh/employee-directory-backend.git employee-directory-backend
2. cd employee-directory-backend
3. run npm install
4. edit databse credentials in file config/config.json
5. run npm install -g sequelize-cli
6. run sequelize init
7. run sequelize db:migrate
8. run npm start
9. Username: admin@admin.com -- Password: Test@123

# Unit Testing
1. Configure an NPM script for running our tests from the command line. Open up package.json and configure a script named test for running Jest:
"scripts": {
    "test": "jest"
  },
2. run npm test

