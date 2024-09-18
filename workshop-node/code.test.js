const request = require('supertest');
const app = require('./code'); // Assuming the previous code is in app.js

describe('Login Handler', () => {
  test('Valid credentials should return 200 OK', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'user1@example.com', password: 'password12345' });
    expect(response.statusCode).toBe(200);
  });

  test('Invalid password should return 401 Unauthorized', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'user1@example.com', password: 'wrongpassword' });
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Invalid password');
  });

  test('Non-existent user should return 401 Unauthorized', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'nonexistent@example.com', password: 'somepassword' });
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Invalid email');
  });

  test('Invalid email format should return 400 Bad Request', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'invalid.email', password: 'somepassword' });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Invalid email format');
  });
});
