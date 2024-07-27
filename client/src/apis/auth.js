
// Authentication API using React and Node.js

// Node.js API endpoints
const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON data
app.use(express.json());

// Register new user
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // Add your logic to register a new user
  res.status(200).json({ message: 'User registered successfully' });
});

// Login user
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Add your logic to authenticate the user
  const token = 'your_token'; // Generate a token for the authenticated user
  res.status(200).json({ token });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// React API call example
fetch('http://localhost:3001/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then((res) => res.json())
  .then((data) => {
    // Handle the response from the API
    console.log(data.message);
  })
  .catch((err) => {
    // Handle any errors
    console.log(err);
  });




