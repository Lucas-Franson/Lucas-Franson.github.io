const express = require('express');

const app = express();

app.use(express.json());
app.use('/books', require('./routes/book'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});