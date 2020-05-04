const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('users', {username: users, pageTitle: 'Users'});
});

router.post('/', (req, res, next) => {
    users.push({user: req.body.name});
    res.render('users', { username: users, pageTitle: 'users'});
});

router.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Index'});
});
 
exports.router = router;
exports.users = users;