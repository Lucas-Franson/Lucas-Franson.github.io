const path = require('path');
const express = require('express');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/user'));

app.use('/products', require('./routes/product'));

app.get('/error', (req, res) => {
    throw new Error("Something went wrong!");
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});