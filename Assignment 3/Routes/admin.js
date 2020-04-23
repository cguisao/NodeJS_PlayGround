const express = require('express');
var path = require('path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'Views', 'users.html'));
});

module.exports = router;