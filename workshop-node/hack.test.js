const request = require('supertest');
const app = require('./code'); // Assuming the previous code is in app.js

describe('Login Handler Vulnerabilities', () => {
  test('User Enumeration - Invalid Email', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'invalid@example.com', password: 'password12345' });
    
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Invalid email');
  });

  test('Sensitive Log - Invalid Email Format', async () => {
    const originalConsoleLog = console.log;
    let logOutput = '';
    console.log = (message) => {
      logOutput += message + '\n';
    };

    await request(app)
      .post('/login')
      .send({ email: 'in.valid@ex@mple.com', password: 'password12345' });

    console.log = originalConsoleLog;

    expect(logOutput).toContain('in.valid@ex@mple.com');
  });

  test('Sensitive Log - Valid Credentials', async () => {
    const originalConsoleLog = console.log;
    let logOutput = '';
    console.log = (message) => {
      logOutput += message + '\n';
    };

    await request(app)
      .post('/login')
      .send({ email: 'user1@example.com', password: 'password12345' });

    console.log = originalConsoleLog;

    expect(logOutput).toContain('user1@example.com');
    expect(logOutput).toContain('password12345');
  });
});
