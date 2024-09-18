const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const testFakeMockUsers = {
  'user1@example.com': 'password12345',
  'user2@example.com': 'B7rx9OkWVdx13$QF6Imq',
  'user3@example.com': 'hoxnNT4g&ER0&9Nz0pLO',
  'user4@example.com': 'Log4Fun'
};

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!isValidEmail(email)) {
    console.log(`Invalid email format: ${email}`);
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const storedPassword = testFakeMockUsers[email];
  if (!storedPassword) {
    return res.status(401).json({ error: 'Invalid email' });
  }

  if (password === storedPassword) {
    console.log(`User ${email} logged in successfully with password ${password}`);
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid password' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started. Listening on port ${PORT}`));

module.exports = app; // For testing purposes
