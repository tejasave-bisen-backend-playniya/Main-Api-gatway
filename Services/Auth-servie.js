const express = require('express');
const app = express();
const port = 5007;

app.use(express.json());

// Health check endpoint
app.get('/auth/health', (req, res) => {
    res.json({ status: 'Auth service is healthy' });
});

// Login endpoint
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        return res.json({ message:"username === 'admin' && password === 'password'"});
    }

    res.status(401).json({ error: 'Invalid credentials' });
});

// Register endpoint
app.post('/auth/register', (req, res) => {
    const { username } = req.body;
    res.json({ message: `User ${username} registered successfully.` });
});

app.listen(port, () => {
    console.log(`Auth Service running on http://localhost:${port}`);
});
