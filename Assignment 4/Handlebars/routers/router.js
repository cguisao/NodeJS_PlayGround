const express = require('express');

const router = express.Router();

const userArray = [];

router.get('/', (req, res, next) => {
    res.render('index', {PageTitle: 'Index Page'});
});

router.post('/', (req, res, next) => {
    console.log(req.body.name);
    userArray.push({name: req.body.name});
    res.render('users', {
        PageTitle: 'User Page', 
        IsUsers: userArray.length > 0, 
        users: userArray
    });
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        PageTitle: 'User Page', 
        IsUsers: userArray.length > 0, 
        users: userArray
    });
});

router.use('/', (req, res, next) => {
    res.render('404', {PageTitle: '404 Page'});
});

exports.router = router;