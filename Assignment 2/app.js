const express = require('express');

const app = express();

/* app.use((req, res, next) => {
    console.log('First Middleware');
    next(); // This calls the next middleware
})

app.use((req, res, next) => {
    console.log('Second Middleware');
    res.send('End middleware');
}) */

app.use('/users',(req, res, next) => {
    console.log('User page');
    return res.send('<h1> User Page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('Every other page');
    return res.send('<h1> Every other page </h1>');
});

app.listen(3000);

