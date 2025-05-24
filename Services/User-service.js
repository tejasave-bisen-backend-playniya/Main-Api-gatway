// user-service.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => {
  res.json({ service: "User Service", status: "OK" });
});
app.post('/users', (req, res) => {
  res.json({ service: "User Service", status: "got it" });
});

app.listen(5002, "127.0.0.1",() =>  console.log(' user service running on http://127.0.0.1:5002'));
