const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/users',(req, res, next) => {
    console.log('User page');
    res.sendfile(path.join(__dirname, '..', 'Views', 'users.html'));
});

module.exports = router;