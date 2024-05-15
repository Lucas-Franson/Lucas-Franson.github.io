const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.post('/', (req, res) => {
    
    const { username } = req.body;
    console.log(username);
    res.status(201).send('User added successfully!');

});

module.exports = router;