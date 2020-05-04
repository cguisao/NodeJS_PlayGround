const express = require('express');
const bodyParser = require('body-parser');

const hbs = require('express-handlebars');

const router = require('./routers/router');

const app = express();

app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: false}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router.router);

app.listen(3000);