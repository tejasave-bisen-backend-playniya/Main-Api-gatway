const express = require('express');
const app = express();
app.use(express.json());

app.get('/game', (req, res) => {
  res.json({ message: 'games service: Info retrieved (GET)' });
});

app.post('/game/into', (req, res) => {
  res.json({ message: 'games service: Info updated (POST)', body: req.body });
});

app.listen(5006, '127.0.0.1', () => {
  console.log('game service running on http://127.0.0.1:5006');
});