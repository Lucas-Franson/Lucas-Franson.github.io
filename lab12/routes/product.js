const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
});

router.post('/', (req, res) => {
    const { product } = req.body;
    console.log(product);
    res.status(201).send('Product added successfully!');
});

module.exports = router;