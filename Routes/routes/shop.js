const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('Every other page');
    return res.send('<h1> Every other page </h1>');
});

module.exports = router;