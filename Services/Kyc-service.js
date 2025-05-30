const express = require('express');
const app = express();
app.use(express.json());

app.get('/kyc', (req, res) => {
  res.json({ message: 'KYC service: KYC status is verified (GET)' });
});

app.post('/kyc/login', (req, res) => {
  res.json({ message: 'KYC service: KYC update submitted (POST)', body: req.body });
});

app.listen(5005, () => {
  console.log('KYC service running on http://127.0.0.1:5005');
});