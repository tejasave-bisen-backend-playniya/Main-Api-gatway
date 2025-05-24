const express = require('express');
const app = express();
app.use(express.json());

app.get('/wallet', (req, res) => {
  res.json({ message: 'Wallet service: Balance fetched (GET)' });
});

app.post('/wallets', (req, res) => {
  res.json({ message: 'Wallet service: Balance updated (POST)', body: req.body });
});

app.listen(5001, '127.0.0.1', () => {
  console.log('Wallet service running on http://127.0.0.1:5001');
});