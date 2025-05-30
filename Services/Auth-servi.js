// auth-clone.js
const express = require('express');
const app = express();
const port = 5009; // Different port

app.use(express.json());

app.get('/auth/health', (req, res) => {
    res.json({ status: 'Auth clone is healthy' }); // Different message to distinguish
});

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        return res.json({ message: "Auth clone - success login" });
    }

    res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/auth/register', (req, res) => {
    const { username } = req.body;
    res.json({ message: `Auth clone - User ${username} registered.` });
});

app.listen(port, () => {
    console.log(`Auth Clone running on http://localhost:${port}`);
});
