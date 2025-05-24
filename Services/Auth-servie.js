const express = require('express');
const app = express();
app.use(express.json());

app.get('/auth', (req, res) => {
  res.json({ message: 'Auth service: Login successful (GET)' });
});

app.post('/auths', (req, res) => {
  res.json({ message: 'Auth service: Login successful (POST)', body: req.body });
});

app.listen(5008, "127.0.0.1", () => {
  console.log('Auth service running on http://127.0.0.1:5008');
});

