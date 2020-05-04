const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./Routes/router');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router.router);

app.listen(3000);