const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const SECRET_KEY = 'secret_key_177433';

app.use(cors());
app.use(bodyParser.json());

const users = [
    { user: 'admin', password: '1234' },
    { user: 'user', password: 'abcd' }
];
  
app.get('/', (req, res) => {
    res.send('Backend server is running');
})
app.post('/login', (req, res) => {
    const { user, password } = req.body;

    console.log('Отримано логін:', user);
    console.log('Отримано пароль:', password);

    const foundUser = users.find(u => u.user === user && u.password === password);

    if (foundUser) {
        const token = jwt.sign({ user: foundUser.user }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
        console.log('Згенеровано токен:', foundUser.user);
        console.log('Токен:', token)
    } else {
        res.status(401).json({ message: 'Невірний логін або пароль' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})