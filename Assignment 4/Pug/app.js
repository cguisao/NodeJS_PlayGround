const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const router = require('./routes/routers');

app.set('view engine', 'pug');
app.set('views', 'views');

// This is VERY important because it allows to get values from the body of a form!!!
app.use(bodyParser.urlencoded({extended: false}));
app.use(router.router);

app.use('/', (req, res, next) => {
    res.render('404');
});

app.listen(3000);