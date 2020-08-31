const request = require('supertest');
const app = require('../app');
const db = require('../models');

afterAll(async (done) => { await db.sequelize.connectionManager.close(); done(); });

describe('======= Create Employee ======= ', () => {
  test('It should respond with a status success and a 200 response and newly created employee id.', async () => {
    const updateEmployee = await request(app)
      .post('/api/add-employee-test')
      .send({
        name: 'New Employee',
        country: 'Lebanon',
        job_title: 'Data Entry Clerk',
        phone: '555-555-555',
        email: 'test@test.com',
        gender: 'male',
        department_id: 1,
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        date_created: db.Sequelize.fn('NOW'),
        date_updated: db.Sequelize.fn('NOW'),
      });
    expect(updateEmployee.statusCode).toBe(200);
    expect(updateEmployee.body.status).toBe('success');
    expect(updateEmployee.body.newEmployeeId).toBeGreaterThan(0);
  });
});

describe('======= Update Employee ======= ', () => {
  test('It should respond with a status success and a 200 response.', async () => {
    const updateEmployee = await request(app)
      .post('/api/update-employee-test')
      .send({
        employee_id: 1,
        name: 'Sams Sayegh',
        country: 'Lebanon',
        job_title: 'Software Engineer',
        phone: '+9613460129',
        email: 'samersamiralsayegh@gmail.com',
        department_id: 1,
      });
    expect(updateEmployee.statusCode).toBe(200);
    expect(updateEmployee.body.status).toBe('success');
  });
});

describe('======= Delete Employee ======= ', () => {
  test('It should respond with a status success and a 200 response.', async () => {
    const updateEmployee = await request(app)
      .get('/api/delete-employee-test/107');
    expect(updateEmployee.statusCode).toBe(200);
    expect(updateEmployee.body.status).toBe('success');
  });
});
