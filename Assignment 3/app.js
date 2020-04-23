const express = require('express');
const path = require('path');

const adminRouter = require('./Routes/admin');
const everyoneRouter = require('./Routes/everyone');

const app = express();

app.use('/', express.static(path.join(__dirname, 'Public')));

app.use(adminRouter);
app.use(everyoneRouter);

app.listen(3000);