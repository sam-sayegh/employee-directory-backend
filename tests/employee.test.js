const request = require('supertest');
const app = require('../app');
const db = require('../models');

afterAll( async (done) => { await db.sequelize.connectionManager.close(); done(); });

describe('Update Employee', () => {
  test('It should respond with a status success and a 200 response.', async () => {
    const updateEmployee = await request(app)
      .post('/api/update-employee-test')
      .send({
        employee_id: 1,
        name: 'Sam Sayegh',
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
