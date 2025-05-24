const express = require('express');
const app = express();
app.use(express.json());

app.get('/payment', (req, res) => {
  res.json({ message: 'Wallet service: Balance fetched (GET)' });
});

app.post('/payments', (req, res) => {
  res.json({ message: 'Wallet service: Balance updated (POST)', body: req.body });
});

app.listen(5003, '127.0.0.1', () => {
  console.log('payment service running on http://127.0.0.1:5003');
});