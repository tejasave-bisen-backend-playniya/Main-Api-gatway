const express = require('express');
const app = express();
app.use(express.json());

app.get('/leaderboard', (req, res) => {
  res.json({ message: 'Leaderboard service: Top players fetched (GET)' });
});

app.post('/leaderboards', (req, res) => {
  res.json({ message: 'Leaderboard service: Leaderboard updated (POST)', body: req.body });
});

app.listen(5004, '127.0.0.1', () => {
  console.log('Leaderboard service running on http://127.0.0.1:5004');
});