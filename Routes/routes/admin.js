const express = require('express');

const router = express.Router();

router.get('/users',(req, res, next) => {
    console.log('User page');
    return res.send('<h1> User Page</h1>');
});

module.exports = router;