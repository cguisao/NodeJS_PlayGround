const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(adminRouter);

app.use(shopRouter);

app.listen(3000);

